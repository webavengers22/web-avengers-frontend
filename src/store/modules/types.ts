import { IUser } from "./user/types";

export interface State {
  users: IUser;
}

export interface ValidationErrors {
  message: string;
}
