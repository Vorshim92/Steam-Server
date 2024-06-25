import { ChangeEvent, FC } from "react";
import "./UsernameValid.css";

type UsernameProps = {
  isValid: boolean;
  isLoading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  username: string;
};

export const Username: FC<UsernameProps> = ({ isValid, isLoading, handleChange, username }) => {
  return (
    <>
      <div className="username">
        <input name="username" onChange={handleChange} autoComplete="off" spellCheck="false" className="control" type="text" placeholder="Username" />
        <div className={`spinner ${isLoading ? "loading" : ""}`}></div>
      </div>
      <div className={`validation ${!isValid && username !== "" ? "invalid" : ""}`}>Username already taken</div>
    </>
  );
};
