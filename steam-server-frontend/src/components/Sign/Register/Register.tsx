import { ChangeEvent, FC, useEffect, useState } from "react";
import "./Register.css";
import logo from "./logo.svg";
import { Username } from "./UsernameValid";
import PasswordStrength from "./PasswordStrength";

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
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const debouncedUsername = useDebounce(username, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setUsername(e.target.value);
  };

  useEffect(() => {
    setIsValid(!usernames.some((u) => u === debouncedUsername));
    setIsLoading(false);
  }, [debouncedUsername]);

  return (
    <div className="card">
      <img src={logo} />
      <h2>Sign Up</h2>
      <form className="form">
        <Username isLoading={isLoading} isValid={isValid} handleChange={handleChange} />
        <PasswordStrength placeholder="Password" onChange={() => {}} />
        <button disabled={!isValid} className="control" type="button">
          JOIN NOW
        </button>
      </form>
    </div>
  );
};
