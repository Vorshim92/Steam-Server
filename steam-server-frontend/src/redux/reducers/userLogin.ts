import { User } from "../../interfaces/types";
import { Action, ActionType } from "../actionTypes/actionTypeUser";

interface State {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};
export const userLoginReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case ActionType.LOGIN_FAILURE:
      return {
        user: null,
        isLoading: false,
        error: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        user: null,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
