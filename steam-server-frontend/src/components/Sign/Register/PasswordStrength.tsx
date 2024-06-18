import React, { useState, ChangeEvent } from "react";
import "./PasswordStrength.css";
interface PasswordStrengthProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const strengthLabels = ["weak", "medium", "medium", "strong"];

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ placeholder, onChange }) => {
  const [strength, setStrength] = useState<string>("");

  const getStrength = (password: string): string => {
    let strengthIndicator = -1;

    if (/[a-z]/.test(password)) strengthIndicator++;
    if (/[A-Z]/.test(password)) strengthIndicator++;
    if (/\d/.test(password)) strengthIndicator++;
    if (/[^a-zA-Z0-9]/.test(password)) strengthIndicator++;

    if (password.length >= 16) strengthIndicator++;

    return strengthLabels[strengthIndicator] || "";
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setStrength(getStrength(password));
    onChange(password);
  };

  return (
    <>
      <input name="password" spellCheck="false" className="control" type="password" placeholder={placeholder} onChange={handleChange} />
      <div className={`bars ${strength}`}>
        <div></div>
      </div>
      <div className="strength">{strength && `${strength} password`}</div>
    </>
  );
};

export default PasswordStrength;
