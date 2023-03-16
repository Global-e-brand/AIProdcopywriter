import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { Navigate } from "react-router-dom";

// This values are the props in the UI

const currency = "USD";
const style = { layout: "vertical", color: "gold" };

const ButtonWrapper = ({ currency, showSpinner, price }) => {
  const amount = `${price}`;
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [approve, setApprove] = useState(false);

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  function handlePaymentDB(data) {
    fetch("/payment/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data,
      }),
    });
    return;
  }

  return approve ? (
    <Navigate to="/productdescription" />
  ) : (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            handlePaymentDB(data);
            console.log(data);
            setApprove(true);
            return;
          });
        }}
      />
    </>
  );
};

export default function Checkout(props) {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AXD9go1J-Yl3qIw0nVILounF-XMPtQ3P7X3bWXhDAbL_k42sSGL3twdsz7BE0OFYiN2Mo1gnD8SqFx6p",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          currency={currency}
          showSpinner={false}
          price={props.price}
        />
      </PayPalScriptProvider>
      {console.log(props.price)}
    </div>
  );
}
