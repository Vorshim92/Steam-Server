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
        {/* <div id="cuboid">
          <form onSubmit={handleSubmit}>
            <div>
              <p classNameName="cuboid-text">Subscribe</p>
            </div>

            <div>
              <input type="email" name="email" placeholder="Email" value={email} onChange={handleInputChange} />
              <button type="submit"> Submit </button>
            </div>

            <div>
              <p className="cuboid-text loader">Just a moment</p>
            </div>

            <div>
              <span className="reset-icon">
                <i className="fa fa-refresh"></i>
              </span>
              <p className="cuboid-text">Thank you, we'll be in touch</p>
            </div>
          </form>

          <button onClick={onRequestClose}>Close</button>
        </div> */}

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
