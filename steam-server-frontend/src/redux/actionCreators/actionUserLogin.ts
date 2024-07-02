import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes/actionTypeUser";
import { User } from "../../interfaces/types";
export const getUserLogin = (formData?: { email: string; password: string }) => {
  return async (dispatch: Dispatch<Action>) => {
    await dispatch({
      type: ActionType.LOGIN_START,
    });

    try {
      // Get CSRF token
      await axios.get("/sanctum/csrf-cookie");

      // Post login data
      if (formData) {
        await axios.post("/login", formData);
      }

      // Get user data
      const response = await axios.get(`/api/user/`);
      if (response.status === 200) {
        const { data: user } = await axios.get<User>(`/api/v1/users/${response.data.id}`);
        // console.log(user);
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: user,
        });
      }
    } catch (err) {
      dispatch({
        type: ActionType.LOGIN_FAILURE,
        payload: (err as Error).message,
      });
    }
  };
};
