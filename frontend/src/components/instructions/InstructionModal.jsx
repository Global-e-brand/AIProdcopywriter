import React from "react";
import "../instructions/instructionModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function InstructionModal(props) {
  return (
    <div className="modal">
      <div className="modal-background" onClick={props.closeModal}></div>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-header">
            <h2>Instructions</h2>
            <div>
              <button onClick={props.closeModal}>
                <CloseIcon className="close-icon" />
              </button>
            </div>
          </div>
          <div className="card-container1">
            <div className="card-wrapper1">
              <h4>Step #1</h4>
              <p>
                Go to the main page and<br></br> select a category.
              </p>
            </div>
            <div className="card-wrapper1">
              <h4>Step #2</h4>
              <p>
                Answer the questions. <br></br>Set the Tone.
              </p>
            </div>
            <div className="card-wrapper1">
              <h4>Step #3</h4>
              <p>
                Hit the SUBMIT button.<br></br> Boom!!{" "}
              </p>
            </div>
          </div>
          {props.enableLink ? (
            <Link to={props.linkTarget}>
              <button className="skipbutton instruction-modal-link">
                {props.linkValue}
              </button>
            </Link>
          ) : (
            <></>
          )}
          {/* <div className="end-modalcontent">
          <h3> Welcome to AI ProdCopywriter!</h3>
          <p>
            Create the perfect description for your needs! Let’s begin by
            selecting a category... <br></br>And don’t worry, you can always
            change this later.
          </p>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default InstructionModal;
