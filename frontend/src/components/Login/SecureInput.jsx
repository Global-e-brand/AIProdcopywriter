import { useState } from "react";
import { eyeClosedIcon, eyeOpenIcon } from "../../assets";
import "./SecureInput.css";

export const SecureInput = (props) => {
  const [secureType, setSecureType] = useState("password");
  const handleSecureChange = (e) => {
    props.setValue(e.target.value);
  };

  const toggleSecure = () => {
    if (secureType === "password") {
      setSecureType("text");
      return;
    }
    setSecureType("password");
  };

  return (
    <div class="secure-input">
      <input
        type={secureType}
        onChange={handleSecureChange}
        value={props.value}
        placeholder={props.placeholder || "Password"}
        className={"input-field"}
      />
      <button className={"visibility-btn"} onClick={toggleSecure}>
        {secureType === "password" ? (
          <img src={eyeClosedIcon} alt="hide secure input field value"></img>
        ) : (
          <img src={eyeOpenIcon} alt="shown secure input field value"></img>
        )}
      </button>
    </div>
  );
};
