import * as React from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./usersettings.css";
import { tickCircle } from "../../assets";
import { closeCircle } from "../../assets";
import {Navigate} from "react-router-dom";


export default function UserSettings() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const [reqSent, setReqSent] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
     //<Navigate replace to="http://localhost:3001/productdescription" />
    setOpen(false);
  };

  return (
    <div>
      {/* <SidebarMenu /> */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {!reqSent ? (
          <div className="dialogBox-desktopView">
            <div className="cancelButton-conatainer-desktopView">
              <button className="close-button" onClick={handleClose}>
                <img src={closeCircle} alt="" />
              </button>
            </div>

            <div className="message-container-desktopView">
              <p className="message">
                {" "}
                Send a request to view the analytics dashboard?
              </p>
            </div>
            <div className="dialogBox-actionButtons-container">
              <button
                className="btn sendButton"
                onClick={() => setReqSent((prev) => !prev)}
              >
                Send Request
              </button>
              <button className="btn cancelButton" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="dialogBox-desktopView">
            <div className="cancelButton-conatainer-desktopView">
              <button className="close-button" onClick={handleClose}>
                <img src={closeCircle} alt="" />
              </button>
            </div>

            <div className="reqSent-container-desktopView">
              <img src={tickCircle} alt="" className="tickCircle" />
              <p className="message">Request Sent!</p>
              <p className="message-sm">Waiting for Admin Approval </p>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
