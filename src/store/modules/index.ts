import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import users from './user';
import { State } from './types';

const rootReducer = (state: State | undefined, action: AnyAction) => {
  return combineReducers({
    users,
  })(state, action);
};

export default rootReducer;
