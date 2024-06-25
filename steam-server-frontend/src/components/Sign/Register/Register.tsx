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

const Register = () => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "username") {
      setIsLoading(true);
    }
  };
  const debouncedUsername = useDebounce(formData.username, 500);

  useEffect(() => {
    if (debouncedUsername) {
      setIsLoading(true);
      setIsUsernameValid(!usernames.includes(debouncedUsername));
      setIsLoading(false);
    } else {
      setIsUsernameValid(false);
      setIsLoading(false);
    }
  }, [debouncedUsername]);

  useEffect(() => {
    setIsFormValid(isUsernameValid && formData.password === formData.password_confirmation && formData.password !== "" && formData.email !== "");
  }, [formData, isUsernameValid]);

  const onSubmitRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Get CSRF token
      // await axios.get("/sanctum/csrf-cookie");

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
        <Username isLoading={isLoading} isValid={isUsernameValid} handleChange={handleInputChange} username={formData.username} />
        <input name="email" onChange={handleInputChange} autoComplete="off" spellCheck="false" className="control" type="email" placeholder="Email" />
        <PasswordStrength placeholder="Password" handleChange={handleInputChange} />
        <input name="password_confirmation" spellCheck="false" className="control" type="password" placeholder="Confirm Password" onChange={handleInputChange} />
        <button disabled={!isFormValid} className="control" type="submit">
          JOIN NOW
        </button>
      </form>
    </div>
  );
};
export default Register;
