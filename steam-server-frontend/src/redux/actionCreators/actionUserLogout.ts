import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes/actionTypeUser";
export const userLogout = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      // Post logout data
      await axios.post("/logout");
      // Get user data
      dispatch({
        type: ActionType.LOGOUT,
      });
    } catch (err) {
      dispatch({
        type: ActionType.LOGIN_FAILURE,
        payload: (err as Error).message,
      });
    }
  };
};
