import React, { useEffect } from "react";
import "./authentication.css";
import { fulllogo } from "../../assets";
import EmailVerification from "./EmailVerification";
import ResetPassword from "./ResetPassword";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState("email");

  const selectComponent = () => {
    switch (stage) {
      case "email":
        return (
          <EmailVerification
            email={email}
            setEmail={setEmail}
            setStage={setStage}
          />
        );
      case "reset":
        return <ResetPassword email={email} setStage={setStage} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="authentication-page">
      <img
        className="app-logo outside"
        src={fulllogo}
        alt="AI ProdCopywriter logo"
      ></img>
      <div className="authentication-card">{selectComponent()}</div>
    </div>
  );
}

export default ForgotPassword;
