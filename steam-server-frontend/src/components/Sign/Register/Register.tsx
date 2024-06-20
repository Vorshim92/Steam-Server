import { ChangeEvent, FC, useEffect, useState } from "react";
import "./Register.css";
import logo from "./logo.svg";
import { Username } from "./UsernameValid";
import PasswordStrength from "./PasswordStrength";
import axios from "axios";
import { useAppDispatch } from "../../../redux/hooks";
import { ActionType, Action } from "../../../redux/actionTypes/actionTypeUser";
const usernames = ["joe", "joe1", "joe2"];

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const Register = () => {
  console.log("sono in register");
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "username") {
      setIsLoading(true);
    }

    setFormData((prevFormData) => {
      const newFormData = {
        ...prevFormData,
        [name]: value,
      };

      if (name !== "password" && value !== prevFormData.password) {
        setIsValid(false);
      } else if (name === "username" && usernames.includes(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }

      return newFormData;
    });
  };
  const debouncedUsername = useDebounce(formData.username, 500);

  useEffect(() => {
    setIsValid(!usernames.some((u) => u === debouncedUsername));
    setIsLoading(false);
  }, [debouncedUsername]);

  const onSubmitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Get CSRF token
      await axios.get("/sanctum/csrf-cookie");

      // Post login data
      console.log(formData);
      await axios.post("/register", formData);
      // Get user data
      const { data } = await axios.get(`/api/user`);
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

  return (
    <div className="card">
      <img src={logo} />
      <h2>Sign Up</h2>
      <form className="form text-white" onSubmit={onSubmitRegister}>
        <Username isLoading={isLoading} isValid={isValid} handleChange={handleInputChange} />
        <input name="email" onChange={handleInputChange} autoComplete="off" spellCheck="false" className="control" type="email" placeholder="Email" />
        <PasswordStrength placeholder="Password" handleChange={handleInputChange} />
        <input name="password_confirmation" spellCheck="false" className="control" type="password" placeholder="Confirm Password" onChange={handleInputChange} />
        <button disabled={!isValid} className="control" type="submit">
          JOIN NOW
        </button>
      </form>
    </div>
  );
};
