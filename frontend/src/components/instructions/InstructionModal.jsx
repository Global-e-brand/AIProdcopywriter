import React from "react";
import "../instructions/instructionModal.css";

function InstructionModal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h2>Instructions</h2>
          <div>
            <button onClick={closeModal}>X</button>
          </div>
        </div>
        <div className="card-container1">
          <div className="card-wrapper1">
            <h4>Step #1</h4>
            <p>
              Goto main page <br></br>Select category of your choice
            </p>
          </div>
          <div className="card-wrapper1">
            <h4>Step #2</h4>
            <p>
              Answer the following questions <br></br>Set the Tone
            </p>
          </div>
          <div className="card-wrapper1">
            <h4>Step #3</h4>
            <p>
              Hit the Create Content button <br></br> Boom!!{" "}
            </p>
          </div>
        </div>
        <div className="end-modalcontent">
          <h3> Welcome to AI ProdCopywriter!</h3>
          <p>
            Create the perfect description for your needs! Let’s begin by
            selecting a category... <br></br>And don’t worry, you can always
            change this later.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InstructionModal;
