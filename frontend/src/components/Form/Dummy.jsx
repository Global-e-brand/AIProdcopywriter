import React, { useState } from "react";
import "./form.css";

function Dummy(props) {
  const [tone, setTone] = useState();
  const [inputOne, setInputOne] = useState();
  const [inputTwo, setInputTwo] = useState();
  const [data, setData] = useState();
  const [path,setPath]=useState(props.path);

  async function handleSubmit(path) {

    console.log("data submitted",path, tone, inputOne, inputTwo); // api call to fetch data
    //mongo call
    let res = await fetch("/api"+ path+"", {
      method: "POST",
      body: JSON.stringify({
        data: `write for ${inputOne}`,
      }),
    });
    // await console.log(res.json());

    let data1 = res.json();
    data1.then((data) => {
      setData(data[0].text);
      console.log(data[0].text.trim());
    });
    //
  }
  return (
    <div className="main-division">
      <div style={{ heigh: "150px", marginTop: "12%", flex: "8.5" }}>
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
              <label onClick={() => handleSubmit(path)} variant="contained">
                Create Content
              </label>
            </div>
          </div>
        </form>
      </div>
      <div
        style={{
          flex: "4.5",
          marginTop: "12%",
          overflowY: "auto",
          height: "500px",
          fontSize: "18px",
          fontWeight: "600",
          width: "400px",
        }}
      >
        <div className="category_name">
          <h3>Result</h3>
        </div>
        {data}
      </div>
    </div>
  );
}

export default Dummy;
