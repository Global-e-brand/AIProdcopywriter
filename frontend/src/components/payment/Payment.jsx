import React, { useState } from "react";
import Checkout from "./Checkout.js";
import "./payment.css";
import Checkbox from "@mui/material/Checkbox";

function Payment() {
  const [price, setPrice] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  function handleBasic() {
    setCheck1(!check1);
    setCheck2(false);
    setPrice("10");
  }
  function handleStandard() {
    setCheck1(false);
    setCheck2(!check2);
    setPrice("20");
  }

  return (
    <div>
      <div className="payment">
        <div className="BasicPlan">
          <div className="basic-plan-button">
            <div>
              <p>Basic Plan</p>
              <Checkbox
                checked={check1}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                onClick={() => handleBasic()}
              />{" "}
              10$ / Mo
            </div>
          </div>
          <div className="standard-plan-button">
            <div>
              <p>Standard Plan</p>
              <Checkbox
                checked={check2}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                onClick={() => handleStandard()}
              />{" "}
              20$ / Mo
            </div>
          </div>
        </div>
        <div className="paymentButtons">
          <Checkout price={price} />
        </div>
      </div>
    </div>
  );
}

export default Payment;
