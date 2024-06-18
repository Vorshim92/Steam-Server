import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userLoginReducer } from "./reducers/userLogin";
export const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
