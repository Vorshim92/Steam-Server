import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getUserLogin } from "../../../redux/actionCreators/actionUserLogin";
const Login = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await dispatch(getUserLogin(formData));
  };

  return (
    <>
      <section className="page login-1">
        <div className="login-1-background"></div>
        <div className="login-1-card">
          <img src="" />
          <h2>Welcome back</h2>
          <form onSubmit={onSubmitLogin}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            <button type="submit">Sign In</button>
          </form>
          <footer>
            Need an account? Sign up <a href="#">here</a>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Login;
