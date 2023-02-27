import React, { useState, useRef } from "react";
import "./form.css";
import { Grid, Button } from "@mui/material";
import Loader from "../loader/loader";

function Dummy(props) {
  const [tone, setTone] = useState("Neutral");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [data, setData] = useState();
  const [path, setPath] = useState(props.path);
  const [loading, setLoading] = useState(false);
  const [Copied, setCopied] = useState();
  const [AllCopied, setAllCopied] = useState();

  const textAreaRef = useRef(null);

  function copyToClipboard(item, i) {
    i = i + 1;
    navigator.clipboard.writeText(item.text);
    setCopied(i);
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }

  function copyToAllClipboard(data) {
    let clipboardData = "";
    data.map((item, i) => {
      i = i + 1;
      clipboardData += `Result #` + i + ":\n" + item.text.trim() + `\n\n`;
    });

    // clipboardData.
    navigator.clipboard.writeText(clipboardData.trim());
    setAllCopied(true);
    const timer = setTimeout(() => {
      setAllCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }

  async function handleSubmit(path) {
    setLoading(true);
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

    let response = res.json();
    console.log("response", response);
    response.then((data) => {
      setData(data);
    });
    setLoading(false);
  }

  const handleTone = (e) => {
    setTone(e);
  };

  return (
    <>
      <div className="category-title">
        <h2>
          <strong>{props.category}</strong>
        </h2>
      </div>
      <div className="main-division">
        <Grid container>
          <Grid item xs={8} md={8}>
            <form className="form">
              <div>
                {props.toneInput ? (
                  <div className="input_three">
                    <h5>
                      <strong>Select a tone</strong>
                    </h5>
                    <Grid container>
                      <Grid item xs={2} md={3}>
                        <Button
                          className={
                            tone == "Friendly"
                              ? "tone-btn-selected"
                              : "tone-btn"
                          }
                          onClick={(e) => handleTone("Friendly")}
                        >
                          Friendly
                        </Button>
                      </Grid>
                      <Grid item xs={3} md={3}>
                        <Button
                          className={
                            tone == "Professional"
                              ? "tone-btn-selected"
                              : "tone-btn"
                          }
                          onClick={(e) => handleTone("Professional")}
                        >
                          Professional
                        </Button>
                      </Grid>
                      <Grid item xs={3} md={3}>
                        <Button
                          className={
                            tone == "Empathetic"
                              ? "tone-btn-selected"
                              : "tone-btn"
                          }
                          onClick={(e) => handleTone("Empathetic")}
                        >
                          Empathetic
                        </Button>
                      </Grid>
                      <Grid item xs={3} md={3}>
                        <Button
                          className={
                            tone == "Bold" ? "tone-btn-selected" : "tone-btn"
                          }
                          onClick={(e) => handleTone("Bold")}
                        >
                          Bold
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                ) : (
                  <></>
                )}
                <div className="input_one">
                  <h5>
                    <strong>{props.inputOneTitle}</strong>
                  </h5>
                  <textarea
                    value={inputOne}
                    onChange={(e) => setInputOne(e.target.value)}
                  placeholder={props.placeholderOne}
                  />
                  {/* {console.log(inputOne, inputTwo, tone)} */}
                </div>
                {props.inputTwo ? (
                  <div className="input_one">
                    <h5>
                      <strong>{props.inputTwoTitle}</strong>
                    </h5>

                    <textarea
                      value={inputTwo}
                      onChange={(e) => setInputTwo(e.target.value)}
                    placeholder={props.placeholderTwo}
                    />
                  </div>
                ) : (
                  <></>
                )}

                <div className="submitButton">
                <button
                  onClick={() => handleSubmit(path)}
                  disabled={loading}
                  variant="contained"
                >
                    Submit
                </button>
                </div>
              </div>
            </form>
          </Grid>

          <Grid item xs={4} md={4}>
            <div className="category-title m-2">
              <h2>
                <strong>Result</strong>
              </h2>
            </div>
            {/* {console.log("data",data)} */}
            {loading ? (
              <Loader />
            ) : (
              <>
                {data != undefined ? (
                  <>
                    <button
                      className="cpyall-btn"
                      onClick={() => copyToAllClipboard(data)}
                    >
                      {" "}
                      Copy All
                    </button>
                    {AllCopied ? (
                      <h1 className="text-cp-al">ALL DESCRIPTIONS COPIED ! </h1>
                    ) : (
                      ""
                    )}

                    <div className="output-container">
                      {data.map((item, i) => {
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
                                  <div className="hd-cp">
                                    <button
                                      className="cpy-btn"
                                      onClick={() => copyToClipboard(item, i)}
                                    >
                                      Copy
                                    </button>
                                    {/* <h1 className="text-status">Description {i+1} Copied ! </h1> */}
                                    {Copied == i + 1 ? (
                                      <h1 className="text-status">
                                        Description {i + 1} Copied !{" "}
                                      </h1>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </Grid>
                              </Grid>

                              <div className="ot-bd" ref={textAreaRef}>
                              {item.text.trim()}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>{/* <div className="err-msg">Oops Try Again !</div> */}</>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Dummy;
