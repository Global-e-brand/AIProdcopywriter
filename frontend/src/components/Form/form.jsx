import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import Loader from "../loader/loader";
import {
  copyToAllClipboard,
  copyToClipboard,
} from "../../helpers/copyFunctions";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReactGA from "react-ga4";

function Form(props) {
  const [Copied, setCopied] = useState();
  const [AllCopied, setAllCopied] = useState();
  const [singleContent, setSingleContent] = useState();

  const navigate = useNavigate();
  const textAreaRef = useRef(null);

  let path = window.location.href.substring(window.location.origin.length);

  async function handleSubmit(e, path) {
    e.preventDefault();

    props.states.setLoading(true);

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
    } else {
      ReactGA.event("category_form_submission", {
        category_form_submit: path,
      });
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
        multiple_content: [],
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

  return (
    <>
      {/* Main Form */}
      {/* <div className="main-form-desktop-view"> */}
      <Grid item xs={6} sm={8} md={5} lg={5} xl={5}>
        <form
          id="category-form"
          className="form"
          onSubmit={(e) => {
            handleSubmit(e, path);
          }}
        >
          <div className="input_one">
            <h5>{props.inputOneTitle}</h5>
            <textarea
              value={props.states.inputOne}
              onChange={(e) => props.states.setInputOne(e.target.value)}
              placeholder={props.placeholderOne}
            />
          </div>
          {props.inputTwoActive ? (
            <div className="input_one">
              <h5>{props.inputTwoTitle}</h5>

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
              <h5>Select a tone</h5>
              <Grid
                container
                justifyContent="center"
                columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 1, xl: 4 }}
                rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 4 }}
              >
                <Grid item xs={6} sm={6} md={6} lg={3}>
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
                <Grid item xs={6} sm={6} md={6} lg={3}>
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
                <Grid item xs={6} sm={6} md={6} lg={3}>
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
                <Grid item xs={6} sm={6} md={6} lg={3}>
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
              type="submit"
              variant="contained"
              disabled={
                (props.inputOneActive && !props.states.inputOne) ||
                (props.inputTwoActive && !props.states.inputTwo) ||
                (props.inputThreeActive && !props.states.inputThree) ||
                props.states.loading
              }
            >
              {props.states.loading ? "Generating Results" : "Submit"}
            </button>
          </div>
        </form>
      </Grid>
      {/* </div> */}

      {/* results */}
      <Grid item xs={4} sm={12} md={4} lg={4} xl={4}>
        <div className="category-title mr-2 m-2 smooth-edge">
          <h2>Results</h2>
        </div>
        {/* {console.log("data",data)} */}
        {props.states.loading ? (
          <Loader />
        ) : (
          <>
            {props.states.data != undefined ? (
              <>
                <Grid container rowSpacing={1}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                      <ContentCopyIcon />
                      <p>Copy All</p>
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
                  {props.states.data.map((item, i) => {
                    return (
                      <>
                        <div className="output-layout">
                          <Grid container className="result-card-title-bar">
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                              <div className="hd-cp">
                                <button
                                  className="icon-component cpy-btn"
                                  onClick={() =>
                                    handleSave(item.text.trim(), i + 1)
                                  }
                                >
                                  <BookmarkBorderIcon />
                                  <p>Save</p>
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
                                  className="icon-component cpy-btn"
                                  onClick={() =>
                                    copyToClipboard(item, i, Copied, setCopied)
                                  }
                                >
                                  <ContentCopyIcon />
                                  <p>Copy</p>
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
