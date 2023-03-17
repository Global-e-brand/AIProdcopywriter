import React from "react";
import { Tick } from "../../assets";
import "./payment.css";
import Checkout from "./Checkout.js";
import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { authenticate } from "../../helpers/authenticationStatus";

function PaymentNew() {
  const [isAuthenticated, setAuthenticated] = useState(undefined);

  const location = useLocation();

  useEffect(() => {
    setAuthenticated(undefined);
    authenticate((status) => {
      setAuthenticated(status === "authenticated" ? true : false);
    });
  }, [location.pathname]);

  return (
    <>
      {isAuthenticated ? (
        <div className="payment-desktop-view">
          <div className="basic-plan-card-desktop">
            <div className="basic-plan-heading">
              <h2>Basic Plan </h2>
            </div>
            <div className="basic-plan-content">
              <div className="price">
                <p>$9 </p>
                <span>
                  per<br></br> month
                </span>
              </div>
              <ul>
                <li>
                  <img src={Tick} />
                  Lorem ipsum dolor sit amet.{" "}
                </li>
                <li>
                  <img src={Tick} />
                  Lorem ipsum dolor sit amet.{" "}
                </li>
                <li>
                  <img src={Tick} />
                  Lorem ipsum dolor sit amet.{" "}
                </li>
                <li>
                  <img src={Tick} />
                  Lorem ipsum dolor sit amet.{" "}
                </li>
              </ul>
            </div>
            <div className="checkout-buttons">
              <Checkout price={"9"} />
            </div>
          </div>
          <div className="standard-plan-card-desktop">
            <div className="standard-plan-heading">
              <h2>Standard Plan</h2>
            </div>
            <div className="standard-plan-content">
              <div className="price">
                <p>$19 </p>
                <span>
                  per<br></br> month
                </span>
              </div>
              <ul>
                <li>
                  <img src={Tick} />
                  Lorem ipsum dolor sit amet.{" "}
                </li>
                <li>
                  <img src={Tick} />
                  Lorem ipsum dolor sit amet.{" "}
                </li>
                <li>
                  <img src={Tick} />
                  Lorem ipsum dolor sit amet.{" "}
                </li>
                <li>
                  <img src={Tick} />
                  Lorem ipsum dolor sit amet.{" "}
                </li>
              </ul>
            </div>
            <div className="checkout-buttons">
              <Checkout price={"19"} />
            </div>
          </div>
        </div>
      ) : isAuthenticated === undefined ? (
        ""
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default PaymentNew;
