import { Service } from "../../interfaces/types";
import { Action, ActionType } from "../actionTypes/actionTypeCheckout";

interface State {
  service: Service | null;
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  service: null,
  isLoading: false,
  error: null,
};
export const userCheckoutReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SERVICE_RMV:
      return {
        service: null,
        isLoading: true,
        error: null,
      };
    case ActionType.SERVICE_ADD:
      return {
        service: action.payload,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};
