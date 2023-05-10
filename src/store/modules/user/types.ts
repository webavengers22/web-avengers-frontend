export interface IUser {
  username: string | null;
  isLoadingLogin: boolean;
  userlist: string[];
  isLoadingUsers: boolean;
  isLoadingUser: boolean;
  error: string | null;
}

export interface LoginResponse {
  token: string;
  username: string;
}

export interface UsersResponse {
  data: string[];
}

export interface WhoIamResponse {
  data: string | null;
}
