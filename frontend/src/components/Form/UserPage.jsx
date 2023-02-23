import React, { useState } from "react";
import "./form.css";
import { Grid, Button } from "@mui/material";

function Dummy(props) {
  const [tone, setTone] = useState("Friendly");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [data, setData] = useState();
  const [path, setPath] = useState(props.path);

  async function handleSubmit(path) {
    let res = await fetch("/api" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: props.category,
        inputOneBool: props.inputOne,
        inputTwoBool: props.inputTwo,
        inputThreeBool: props.toneInput,
        inputOne: inputOne,
        inputTwo: inputTwo,
        tone: tone,
        data: `${inputOne}`,
      }),
    });
    // await console.log(res.json());

    let data1 = res.json();
    data1.then((data) => {
      // console.log(data);
      setData(data);
      // console.log(data[0].text.trim());
    });
    //
  }


  const handleTone=(e)=>{
    setTone(e);
  }

  return (
    <div className="main-division">
      <Grid container>
        <Grid item xs={8} md={8}>
          <form className="form">
            <div>
              <div className="category-title">
                <h2>
                  <strong>{props.category}</strong>
                </h2>
              </div>
              {props.toneInput ? (
                <div className="input_three">
                  <h5>
                    <strong>Select a tone</strong>
                  </h5>
                  <Grid container>
                    <Grid item xs={2} md={3}>
                      <Button
                        className={tone=="Friendly"?"tone-btn-selected":"tone-btn"}
                        onClick={(e) => handleTone("Friendly")}
                      >
                        Friendly
                      </Button>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <Button
                        className={tone=="Professional"?"tone-btn-selected":"tone-btn"}
                        onClick={(e) => handleTone("Professional")}
                      >
                        Professional
                      </Button>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <Button
                        className={tone=="Empathetic"?"tone-btn-selected":"tone-btn"}
                        onClick={(e) => handleTone("Empathetic")}
                      >
                        Empathetic
                      </Button>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <Button
                        className={tone=="Bold"?"tone-btn-selected":"tone-btn"}
                        onClick={(e) => handleTone("Bold")}
                      >
                        Bold
                      </Button>
                    </Grid>
                  </Grid>

                  {/* <select
                name="tone"
                id="tone"
                onChange={(e) => setTone(e.target.value)}
              >
                <option value="Friendly">Friendly</option>
                <option value="Professional">Professional</option>
                <option value="Empathetic">Empathetic</option>
                <option value="Bold">Bold</option>
              </select> */}
                </div>
              ) : (
                <></>
              )}
              <div className="input_one">
                <h5>
                  <strong>{props.inputOneTitle}</strong>
                </h5>
                <input
                  value={inputOne}
                  onChange={(e) => setInputOne(e.target.value)}
                  placeholder=""
                />
                {/* {console.log(inputOne, inputTwo, tone)} */}
              </div>
              {props.inputTwo ? (
                <div className="input_one">
                  <h5>
                    <strong>{props.inputTwoTitle}</strong>
                  </h5>
                  <input
                    value={inputTwo}
                    onChange={(e) => setInputTwo(e.target.value)}
                    placeholder=""
                  />
                </div>
              ) : (
                <></>
              )}

              <div className="submitButton">
                <label onClick={() => handleSubmit(path)} variant="contained">
                  Submit
                </label>
              </div>
            </div>
          </form>
        </Grid>

        <Grid item xs={4} md={4}>
          <div className="category-title">
            <h2>
              <strong>Result</strong>
            </h2>
            
          </div>
          
          {data != undefined ? <>
            <button className="cpyall-btn">Copy All</button>
            {data.map((item,i) => {
              return (
                <>
                <div className="output-layout">
                <Grid container>
                  <Grid item xs={10} md={10}>
                    <div className="ot-hd">
                      <div>Description {i + 1}</div>
                    </div>
                  </Grid>
                  <Grid item xs={2} md={2}>
                    <div>
                      <button className="cpy-btn">Copy</button>                   
                     </div>
                  </Grid>
                </Grid>

                <div className="ot-bd">{item.text}
                </div>
              </div>
                       
              </>         
              );
            })}
            </>
          : (
            <>
              <div className="err-msg">Oops Try Again !</div>
            </>
          )}

          
        </Grid>
      </Grid>
    </div>
  );
}

export default Dummy;
