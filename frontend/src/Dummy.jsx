import React, { useState } from "react";
import { Button } from "@mui/material";

function Dummy(props) {
  const [tone, setTone] = useState();
  const [inputOne, setInputOne] = useState();
  const [inputTwo, setInputTwo] = useState();

  function handleSubmit(e) {
    console.log("data submitted", tone, inputOne, inputTwo); // api call to fetch data
  }
  return (
    <form>
      <div style={{ background: "cream", heigh: "150px", marginTop: "10%" }}>
        <div className="input_one">
          <h5>{props.inputOneTitle}</h5>
          <input
            value={inputOne}
            onChange={(e) => setInputOne(e.target.value)}
            placeholder="e.g. Smart Ecom Tech"
          />
          {/* {console.log(inputOne, inputTwo, tone)} */}
        </div>
        {props.inputTwo ? (
          <div className="input_two">
            <h5>{props.inputTwoTitle}</h5>
            <input
              value={inputTwo}
              onChange={(e) => setInputTwo(e.target.value)}
              placeholder="e.g. Smart Ecom Tech"
            />
          </div>
        ) : (
          <></>
        )}
        {props.inputThree ? (
          <div className="input_three">
            <h5>Set the tone</h5>
            <select
              name="tone"
              id="tone"
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="Friendly">Friendly</option>
              <option value="Professional">Professional</option>
              <option value="Empathetic">Empathetic</option>
              <option value="Bold">Bold</option>
            </select>
          </div>
        ) : (
          <></>
        )}
        <div className="submitButton">
          <Button onClick={() => handleSubmit()} variant="contained">
            Create Content
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Dummy;
