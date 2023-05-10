import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apis from '../../../api';
import { IUser, LoginResponse, UsersResponse, WhoIamResponse } from './types';
import { AxiosError } from 'axios';
import { State, ValidationErrors } from '../types';
import { ILoginData } from '../../../api/user/types';

const initialState: IUser = {
  username: null,
  isLoadingLogin: false,
  userlist: [],
  isLoadingUsers: false,
  isLoadingUser: false,
  error: null,
};

export const login = createAsyncThunk<
  { data: LoginResponse },
  ILoginData,
  {
    rejectValue: ValidationErrors;
  }
>('user/login', async (userData, { rejectWithValue }) => {
  try {
    const { data, status } = await apis.usersApi.login(userData);
    if (status === 200) {
      apis.usersApi.setToken(data.token);
      apis.usersApi.setUser(data.username);
    }
    return data.username;
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>;
    if (!error.response)
      return rejectWithValue({ message: '로그인에 실패했습니다.' });
    return rejectWithValue(error.response.data);
  }
});

export const getUsers = createAsyncThunk<
  { data: UsersResponse },
  void,
  {
    rejectValue: ValidationErrors;
  }
>('user/list', async (_, { rejectWithValue }) => {
  try {
    const { data } = await apis.usersApi.getUsers();
    return data;
  } catch (err) {
    const error = err as AxiosError<ValidationErrors>;
    if (!error.response)
      return rejectWithValue({ message: '유저 목록을 불러올 수 없습니다.' });
    return rejectWithValue(error.response.data);
  }
});

export const whoIam = createAsyncThunk<
  WhoIamResponse['data'],
  void,
  {
    rejectValue: ValidationErrors;
  }
>('user/whoIam', async (_, { rejectWithValue }) => {
  try {
    const isUser = await sessionStorage.getItem('username');
    // tobe call get my info api
    return isUser;
  } catch {
    return rejectWithValue({ message: '사용자를 불러올 수 없습니다.' });
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isLoadingLogin = true;
      state.error = null;
    },
    [login.fulfilled.type]: (state, action) => {
      state.isLoadingLogin = false;
      state.username = action.payload;
      state.error = null;
    },
    [login.rejected.type]: (state, action) => {
      state.isLoadingLogin = false;
      state.username = null;
      state.error = action.payload.message;
    },
    //
    [getUsers.pending.type]: (state) => {
      state.isLoadingUsers = true;
      state.error = null;
    },
    [getUsers.fulfilled.type]: (state, action) => {
      state.isLoadingUsers = false;
      state.userlist = action.payload;
      state.error = null;
    },
    [getUsers.rejected.type]: (state, action) => {
      state.isLoadingUsers = false;
      state.userlist = [];
      state.error = action.payload.message;
    },
    //
    [whoIam.pending.type]: (state) => {
      state.isLoadingUser = true;
    },
    [whoIam.fulfilled.type]: (state, action) => {
      state.isLoadingUser = false;
      state.username = action.payload;
      state.error = null;
    },
    [whoIam.rejected.type]: (state, action) => {
      state.isLoadingUser = false;
      state.username = null;
      state.error = action.payload.message;
    },
  },
});

export default userSlice.reducer;
export const userSelector = (state: State) => state.users;
