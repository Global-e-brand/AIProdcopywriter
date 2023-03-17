import React from "react";
import { Tick } from "../../assets";
import "./payment.css";
import Checkout from "./Checkout.js";
function PaymentNew() {
  return (
    <>
      {" "}
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
      <div className="payment-mobile-tablet-view">
        {" "}
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}></Grid>
          <Grid item xs={6}></Grid>
        </Grid> */}
      </div>
    </>
  );
}

export default PaymentNew;
