import React, { useState } from "react";
import "./form.css";

function Dummy(props) {
  const [tone, setTone] = useState();
  const [inputOne, setInputOne] = useState();
  const [inputTwo, setInputTwo] = useState();
  const [data, setData] = useState();

  async function handleSubmit(e) {
    console.log("data submitted", tone, inputOne, inputTwo); // api call to fetch data
    let res = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify({
        data: "Pink Slippers",
      }),
    });
    await console.log(res);
    let data1 = res.body;
    // await setData(data1);
  }
  return (
    <div style={{ heigh: "150px", marginTop: "12%" }}>
      <div className="category_name">
        <h3>{props.category}</h3>
      </div>
      <form className="form">
        <div>
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
              <h5>Choose a tone</h5>
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
            <label onClick={() => handleSubmit()} variant="contained">
              Create Content
            </label>
          </div>
        </div>
      </form>
      <>{data}</>
    </div>
  );
}

export default Dummy;
