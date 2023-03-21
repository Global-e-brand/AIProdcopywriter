import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import Loader from "../loader/loader";
import ReactGA from "react-ga";

function Form(props) {
  const [tone, setTone] = useState("Friendly");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [Copied, setCopied] = useState();
  const [AllCopied, setAllCopied] = useState();
  const [singleContent, setSingleContent] = useState();

  const navigate = useNavigate();
  const textAreaRef = useRef(null);

  function copyToClipboard(item, i) {
    let clipboardData = "";
    i = i + 1;
    clipboardData += item.text.trim();
    navigator.clipboard.writeText(clipboardData);
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

  let path = window.location.href.substring(window.location.origin.length);

  async function handleSubmit(path, text, i) {
    ReactGA.event({
      category: path,
      action: "test",
      label: "desktop-test",
    });

    if (text == null) {
      setLoading(true);
    }

    if (text != null) {
      setSingleContent(i);
    }

    // let checkPayment = await fetch("/checkpayment", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // let result = checkPayment.json();
    // result.then((res) => setIsPaid(res));

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
        single_content: text,
      }),
    });
    let response = await res.json();
    // console.log("response", response);
    if (response?.authenticated === false) {
      navigate("/login");
    }
    setData(response);

    if (text == null) {
      setLoading(false);
    }

    if (text != null) {
      setSingleContent(false);
    }
  }

  const handleTone = (e) => {
    setTone(e);
  };

  return (
    <>
      {/* Main Form */}
      {/* <div className="main-form-desktop-view"> */}
      <Grid item xs={6} sm={8} md={5} lg={5} xl={5}>
        <form className="form">
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

          {props.toneInput ? (
            <div className="input_three">
              <h5>
                <strong>Select a tone</strong>
              </h5>
              <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={3} sm={3} md={3}>
                  <Button
                    className={
                      tone == "Friendly" ? "tone-btn-selected" : "tone-btn"
                    }
                    onClick={(e) => handleTone("Friendly")}
                  >
                    Friendly
                  </Button>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  <Button
                    className={
                      tone == "Professional" ? "tone-btn-selected" : "tone-btn"
                    }
                    onClick={(e) => handleTone("Professional")}
                  >
                    Professional
                  </Button>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  <Button
                    className={
                      tone == "Empathetic" ? "tone-btn-selected" : "tone-btn"
                    }
                    onClick={(e) => handleTone("Empathetic")}
                  >
                    Empathetic
                  </Button>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
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

          <div className="submitButton">
            <button
              onClick={() => handleSubmit(path, null)}
              disabled={loading}
              variant="contained"
            >
              Submit
            </button>
          </div>
        </form>
      </Grid>
      {/* </div> */}

      {/* results */}
      <Grid item xs={4} sm={12} md={4} lg={4} xl={4}>
        <div className="category-title mr-2">
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
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <button
                      className="cpyall-btn"
                      onClick={() => copyToAllClipboard(data)}
                    >
                      Copy All
                    </button>
                    {AllCopied ? (
                      <h1 className="text-cp-al">ALL RESULTS COPIED ! </h1>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {/* <button className="cpyall-btn" onClick={() => handleSubmit(path,data)}>Save All</button>
                    {multipleContent ? (<h1 className="text-cp-al">SAVED ALL !{" "}</h1>) : ("")} */}
                  </Grid>
                </Grid>

                <div className="output-container">
                  {data.map((item, i) => {
                    return (
                      <>
                        <div className="output-layout">
                          <Grid container>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                              <div className="hd-cp">
                                <button
                                  className="cpy-btn"
                                  onClick={() =>
                                    handleSubmit(path, item.text.trim(), i + 1)
                                  }
                                >
                                  Save
                                </button>
                                {singleContent == i + 1 ? (
                                  <h1 className="text-status-save">
                                    Result {i + 1} Saving in History!{" "}
                                  </h1>
                                ) : (
                                  ""
                                )}
                              </div>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                              <div className="ot-hd">
                                <div>Result {i + 1}</div>
                              </div>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
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
                                    Result {i + 1} Copied !{" "}
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
    </>
  );
}

export default Form;
