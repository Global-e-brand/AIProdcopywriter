import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import Loader from "../loader/loader";
import { leftarrow } from "../../assets";
import ReactGA from "react-ga";
import {
  copyToAllClipboard,
  copyToClipboard,
} from "../../helpers/copyFunctions";

function MobileForm(props) {
  const [tone, setTone] = useState("Friendly");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [Copied, setCopied] = useState();
  const [AllCopied, setAllCopied] = useState();
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(true);
  const [singleContent, setSingleContent] = useState();

  const navigate = useNavigate();

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

  async function handleSubmit(path) {
    props.states.setLoading(true);
    ReactGA.event({
      category: path,
      action: "test",
      label: "mobile-test",
    });
    // if (text == null) {
    //   setLoading(true);
    // }

    // if (text != null) {
    //   setSingleContent(i);
    // }

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
        inputOneBool: props.inputOneActive,
        inputTwoBool: props.inputTwoActive,
        inputThreeBool: props.toneInputActive,
        inputOne: props.states.inputOne,
        inputTwo: props.states.inputTwo,
        tone: props.states.tone,
        data: `${props.states.inputOne}`,
      }),
    });
    let response = await res.json();
    // console.log("response", response);
    if (response?.authenticated === false) {
      navigate("/login");
    }
    props.states.setData(response);

    props.states.setLoading(false);
  }

  const handleSave = async (text, i) => {
    setSingleContent(i);

    let res = await fetch("/content/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: props.category,
        inputOne: props.states.inputOne,
        inputTwo: props.states.inputTwo,
        tone: props.states.tone,
        data: props.states.data,
        single_content: text,
      }),
    });
    let response = await res.json();

    if (response?.authenticated === false) {
      navigate("/login");
    }

    setSingleContent(false);
  };

  const handleTone = (e) => {
    props.states.setTone(e);
  };

  function handleNext() {
    if (index < 4) {
      setIndex(index + 1);
    } else setIndex(4);
    setFlip(!flip);
  }
  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    } else setIndex(0);
    setFlip(!flip);
  }

  return (
    <>
      <div className="main-form-mobile">
        <p>{props.category}</p>
        <Grid item xs={12}>
          <form className="form">
            <div className="input_one">
              <h5>
                <strong>{props.inputOneTitle}</strong>
              </h5>
              <textarea
                value={props.states.inputOne}
                onChange={(e) => props.states.setInputOne(e.target.value)}
                placeholder={props.placeholderOne}
              />
              {/* {console.log(inputOne, inputTwo, tone)} */}
            </div>
            {props.inputTwoActive ? (
              <div className="input_one">
                <h5>
                  <strong>{props.inputTwoTitle}</strong>
                </h5>

                <textarea
                  value={props.states.inputTwo}
                  onChange={(e) => props.states.setInputTwo(e.target.value)}
                  placeholder={props.placeholderTwo}
                />
              </div>
            ) : (
              <></>
            )}

            {props.toneInputActive ? (
              <div className="input_three">
                <h5>
                  <strong>Select a tone</strong>
                </h5>
                <Grid container justifyContent="center" spacing={4}>
                  <Grid item xs={6}>
                    <Button
                      className={
                        props.states.tone == "Friendly"
                          ? "tone-btn-selected"
                          : "tone-btn"
                      }
                      onClick={(e) => handleTone("Friendly")}
                    >
                      Friendly
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={
                        props.states.tone == "Professional"
                          ? "tone-btn-selected"
                          : "tone-btn"
                      }
                      onClick={(e) => handleTone("Professional")}
                    >
                      Professional
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={
                        props.states.tone == "Empathetic"
                          ? "tone-btn-selected"
                          : "tone-btn"
                      }
                      onClick={(e) => handleTone("Empathetic")}
                    >
                      Empathetic
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={
                        props.states.tone == "Bold"
                          ? "tone-btn-selected"
                          : "tone-btn"
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
                onClick={() => handleSubmit(path)}
                disabled={props.states.loading}
                variant="contained"
              >
                Submit
              </button>
            </div>
          </form>
        </Grid>
      </div>
      <hr className="hr-blue"></hr>
      <div className="result-mobile-view">
        <Grid item xs={12}>
          <div className="category-title mr-2">
            <h2>
              <strong>Results</strong>
            </h2>
          </div>
          {/* {console.log("data",data)} */}
          {props.states.loading ? (
            <Loader />
          ) : (
            <>
              {props.states.data != undefined ? (
                <>
                  <button
                    className="cpyall-btn"
                    onClick={() =>
                      copyToAllClipboard(props.states.data, setAllCopied)
                    }
                  >
                    {" "}
                    Copy All
                  </button>
                  {AllCopied ? (
                    <h1 className="text-cp-al">ALL RESULTS COPIED ! </h1>
                  ) : (
                    ""
                  )}
                  <Grid container justifyContent="center" alignItems={"center"}>
                    <div className="output-container-mobile-view">
                      <div
                        className="mobile-view-carousal-card"
                        aria-expanded={flip}
                      >
                        <div className="mobile-carousal-card-title">
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={2}>
                              <div className="hd-cp">
                                <button
                                  className="cpy-btn"
                                  onClick={() =>
                                    handleSave(
                                      props.states.data[index].text.trim(),
                                      index + 1
                                    )
                                  }
                                >
                                  Save
                                </button>
                                {singleContent == index + 1 ? (
                                  <h1 className="text-status-save">
                                    Result {index + 1} Saving in History!{" "}
                                  </h1>
                                ) : (
                                  ""
                                )}
                              </div>
                            </Grid>
                            <Grid item xs={8}>
                              <h3 className="result-title">
                                {`Result ${index+1}`}
                              </h3>
                            </Grid>
                            <Grid item xs={2}>
                              <div className="hd-cp">
                                <button
                                  className="cpy-btn"
                                  onClick={() =>
                                    copyToClipboard(
                                      props.states.data[index],
                                      index,
                                      setCopied
                                    )
                                  }
                                >
                                  Copy
                                </button>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <Grid xs={12}>
                          <div className="result-body">
                            <h4>{props.states.data[index].text.trim()}</h4>
                            <div className="mobile-carousal-buttons">
                              <button
                                onClick={() => handlePrev()}
                                className="mobile-left-arrow"
                              >
                                <img src={leftarrow} />{" "}
                              </button>
                              <button
                                onClick={() => handleNext()}
                                className="mobile-right-arrow"
                              >
                                <img src={leftarrow} />{" "}
                              </button>
                            </div>
                          </div>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                </>
              ) : (
                <>{/* <div className="err-msg">Oops Try Again !</div> */}</>
              )}
            </>
          )}
        </Grid>
      </div>
    </>
  );
}

export default MobileForm;
