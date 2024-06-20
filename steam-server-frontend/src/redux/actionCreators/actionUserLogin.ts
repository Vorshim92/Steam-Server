import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes/actionTypeUser";
import { User } from "../reducers/userLogin";
export const getUserLogin = (formData: { email: string; password: string }) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_START,
    });

    try {
      // Get CSRF token
      await axios.get("/sanctum/csrf-cookie");

      // Post login data
      await axios.post("/login", formData);
      // Get user data
      const { data } = await axios.get<User>(`/api/user`);
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.LOGIN_FAILURE,
        payload: (err as Error).message,
      });
    }
  };
};
