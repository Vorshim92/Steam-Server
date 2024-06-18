import { Action, ActionType } from "../actionTypes/actionTypeUser";

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string | null;
  role: string;
}
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
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
