import { User } from "../../interfaces/types";

export enum ActionType {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT = "LOGOUT",
}

interface actionPending {
  type: ActionType.LOGIN_START;
}
interface actionSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: User;
}
interface actionFailure {
  type: ActionType.LOGIN_FAILURE;
  payload: string;
}
interface actionLogout {
  type: ActionType.LOGOUT;
}

export type Action = actionPending | actionSuccess | actionFailure | actionLogout;
