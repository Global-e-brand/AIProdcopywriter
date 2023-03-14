import React from "react";
import "./authentication.css";
import { fulllogo } from "../../assets";
import EmailVerification from "./EmailVerification";
import ResetPassword from "./ResetPassword";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState(0);

  return (
    <div className="authentication-page">
      <img
        className="app-logo outside"
        src={fulllogo}
        alt="AI ProdCopywriter logo"
      ></img>
      <div className="authentication-card">
        {stage === 0 ? (
          <EmailVerification
            email={email}
            setEmail={setEmail}
            setStage={setStage}
          />
        ) : (
          <ResetPassword email={email} />
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
