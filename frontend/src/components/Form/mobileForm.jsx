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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function MobileForm(props) {
  const [Copied, setCopied] = useState();
  const [AllCopied, setAllCopied] = useState();
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(true);
  const [singleContent, setSingleContent] = useState();
  const [touchPosition, setTouchPosition] = useState(null);

  const navigate = useNavigate();

  let path = window.location.href.substring(window.location.origin.length);

  async function handleSubmit(path) {
    setIndex(0);

    props.states.setLoading(true);
    ReactGA.event({
      category: path,
      action: "test",
      label: "mobile-test",
    });

    props.states.setLoading(true);

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

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrev();
    }

    setTouchPosition(null);
  };

  function handleNext() {
    if (index < 4) {
      setIndex(index + 1);
    } else setIndex(0);
    document.getElementById("result-text").scrollTop = 0;
    setFlip(!flip);
  }
  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    } else setIndex(4);
    document.getElementById("result-text").scrollTop = 0;
    setFlip(!flip);
  }

  return (
    <>
      <div className="main-form-mobile">
        <p className="mobile-category-title smooth-edge">{props.category}</p>
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
                <Grid
                  container
                  justifyContent="center"
                  rowSpacing={1}
                  columnSpacing={2}
                >
                  <Grid item xs={6}>
                    <Button
                      className={`icon-component ${
                        props.states.tone == "Friendly"
                          ? "tone-btn-selected"
                          : "tone-btn"
                      }`}
                      onClick={(e) => handleTone("Friendly")}
                    >
                      <span>&#x1F600;</span>
                      <p>Friendly</p>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={`icon-component ${
                        props.states.tone == "Professional"
                          ? "tone-btn-selected"
                          : "tone-btn"
                      }`}
                      onClick={(e) => handleTone("Professional")}
                    >
                      <span>&#128196;</span>
                      <p>Professional</p>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={`icon-component ${
                        props.states.tone == "Empathetic"
                          ? "tone-btn-selected"
                          : "tone-btn"
                      }`}
                      onClick={(e) => handleTone("Empathetic")}
                    >
                      <span>&#x1F495;</span>
                      <p>Empathetic</p>
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      className={`icon-component ${
                        props.states.tone == "Bold"
                          ? "tone-btn-selected"
                          : "tone-btn"
                      }`}
                      onClick={(e) => handleTone("Bold")}
                    >
                      <span>&#9889;</span>
                      <p>Bold</p>
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
                disabled={
                  (props.inputOneActive && !props.states.inputOne) ||
                  (props.inputTwoActive && !props.states.inputTwo) ||
                  (props.inputThreeActive && !props.states.inputThree) ||
                  props.states.loading
                }
                variant="contained"
              >
                {props.states.loading ? "Generating Results" : "Submit"}
              </button>
            </div>
          </form>
        </Grid>
      </div>
      <div className="hr-blue"></div>
      <div className="result-mobile-view">
        <Grid item xs={12}>
          <div className="category-title mr-2 smooth-edge">
            <h2>Results</h2>
          </div>
          {/* {console.log("data",data)} */}
          {props.states.loading ? (
            <Loader />
          ) : (
            <>
              {props.states.data != undefined ? (
                <>
                  <button
                    className="icon-component cpyall-btn"
                    onClick={() =>
                      copyToAllClipboard(
                        props.states.data,
                        AllCopied,
                        setAllCopied
                      )
                    }
                  >
                    <ContentCopyIcon /> <p>Copy All</p>
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
                            <Grid item xs={4} sm={2}>
                              <div className="hd-cp">
                                <button
                                  className="icon-component cpy-btn"
                                  onClick={() =>
                                    handleSave(
                                      props.states.data[index].text.trim(),
                                      index + 1
                                    )
                                  }
                                >
                                  <BookmarkBorderIcon />
                                  <p>Save</p>
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
                            <Grid item xs={4} sm={8}>
                              <h3 className="result-title">
                                {`Result ${index + 1}`}
                              </h3>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                              <div className="hd-cp">
                                <button
                                  className="icon-component cpy-btn"
                                  onClick={() =>
                                    copyToClipboard(
                                      props.states.data[index],
                                      index,
                                      Copied,
                                      setCopied
                                    )
                                  }
                                >
                                  <ContentCopyIcon />
                                  <p>Copy</p>
                                </button>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <Grid xs={12}>
                          <div
                            className="result-body"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                          >
                            <h4 id="result-text">
                              {props.states.data[index].text.trim()}
                            </h4>
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
