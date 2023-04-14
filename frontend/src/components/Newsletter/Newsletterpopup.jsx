import * as React from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./newsletterpopup.css";
import { closeCircle } from "../../assets";
import { getBrowserID } from "../../helpers/browserID/get-brower-id";
import { useState, useEffect, useMemo } from "react";

export default function Newsletterpopup(props) {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const [reqSent, setReqSent] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [warning, setWarning] = useState(false);
  const [email, setEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };


  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleSubmit = async () => {
    if (email.match(regex)) {
      props.handleClose();
      let systemID = await getBrowserID();
      await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemID: systemID,
          subscriber_email: email,
        }),
      });
    } else {
      setWarning(true);
    }
  };

  return (
    <div>     
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="dialogBox-desktopView">
          <div className="cancelButton-conatainer-desktopView">
            <button className="close-button" onClick={props.handleClose}>
              <img src={closeCircle} alt="" />
            </button>
          </div>

          <div className="message-container-desktopView">
            <p className="message">
              {" "}
              Subscribe to our news letter for more updates!
            </p>
          </div>
          <div className="dialogBox-actionButtons-container">
            <input
              placeholder="please enter your e-mail"
              className="newsLetterInput-desktopView"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <button className="btn sendButton" onClick={handleSubmit}>
              Subscribe!
            </button>
          </div>
          {warning && (
            <>
              <div className="dialogBox-actionButtons-container">
                <p style={{ color: "red" }}>Please enter valid email</p>
              </div>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
}
