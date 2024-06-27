import axios from "axios";
import React from "react";
import ReactModal from "react-modal";
import "./ModalResetPsw.scss";
interface ModalResetPswProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalResetPsw = ({ isOpen, onRequestClose }: ModalResetPswProps) => {
  const [email, setEmail] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    try {
      await axios.post("/forgot-password", { email });
      onRequestClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
        <div className="cd-popup-container">
          <form onSubmit={handleSubmit}>
            <p>Insert here your email</p>
            <input type="email" name="email" placeholder="Email" value={email} onChange={handleInputChange} />
            <ul className="cd-buttons">
              <li>
                <button type="submit">INVIA</button>
              </li>
            </ul>
          </form>
          <a onClick={onRequestClose} className="cd-popup-close"></a>
        </div>
      </ReactModal>
    </>
  );
};

export default ModalResetPsw;
