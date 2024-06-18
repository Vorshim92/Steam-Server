import { User } from "../reducers/userLogin";

export enum ActionType {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
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

export type Action = actionPending | actionSuccess | actionFailure;
