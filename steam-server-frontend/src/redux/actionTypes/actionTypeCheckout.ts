import { Service } from "../../interfaces/types";

export enum ActionType {
  SERVICE_RMV = "SERVICE_RMV",
  SERVICE_ADD = "SERVICE_ADD",
}

interface actionSuccess {
  type: ActionType.SERVICE_ADD;
  payload: Service;
}
interface actionFailure {
  type: ActionType.SERVICE_RMV;
  payload: string;
}

export type Action = actionSuccess | actionFailure;
