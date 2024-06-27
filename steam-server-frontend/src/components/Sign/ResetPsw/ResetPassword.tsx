import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const [formData, setFormData] = useState({
    token: token,
    email: email || "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/reset-password", formData);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="reset-password">
        <div className="reset-password-container">
          <div className="reset-password-form">
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" value={formData.email} disabled />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" value={formData.password_confirmation} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <button type="submit">Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
