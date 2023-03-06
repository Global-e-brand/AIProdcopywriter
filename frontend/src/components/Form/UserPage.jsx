import React, { useState, useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./form.css";
import { Grid, Button } from "@mui/material";
import Loader from "../loader/loader";
import HeaderLogo from "../../HeaderLogo";
import SidebarMenu from "../../SidebarMenu";
import { authenticate } from "../../helpers/authenticationStatus";
import { useLocation } from "react-router-dom";

function Dummy(props) {
  const [tone, setTone] = useState("Friendly");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [data, setData] = useState();
  const [path, setPath] = useState(props.path);
  const [loading, setLoading] = useState(false);
  const [Copied, setCopied] = useState();
  const [AllCopied, setAllCopied] = useState();
  const [isAuthenticated, setAuthenticated] = useState(undefined);

  const location = useLocation();
  const textAreaRef = useRef(null);

  useEffect(() => {
    setAuthenticated(undefined);
    authenticate((status) => {
      setAuthenticated(status === "authenticated" ? true : false);
    });
  }, [location.pathname]);

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
      <div className="category-page">
        <div className="category-title">
          <h2>
            <strong>{props.category}</strong>
          </h2>
        </div>
        <div className="main-division">
          <Grid container spacing={4}>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className="logo-panel">
                <HeaderLogo />
                <SidebarMenu />
              </div>
            </Grid>

            {isAuthenticated ? (
              <>
                <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
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
                                tone == "Friendly"
                                  ? "tone-btn-selected"
                                  : "tone-btn"
                              }
                              onClick={(e) => handleTone("Friendly")}
                            >
                              Friendly
                            </Button>
                          </Grid>
                          <Grid item xs={3} sm={3} md={3}>
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
                          <Grid item xs={3} sm={3} md={3}>
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
                          <Grid item xs={3} sm={3} md={3}>
                            <Button
                              className={
                                tone == "Bold"
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
                        disabled={loading}
                        variant="contained"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Grid>

                <Grid item xs={4} sm={12} md={4}>
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
                          <button
                            className="cpyall-btn"
                            onClick={() => copyToAllClipboard(data)}
                          >
                            {" "}
                            Copy All
                          </button>
                          {AllCopied ? (
                            <h1 className="text-cp-al">
                              ALL RESULTS COPIED !{" "}
                            </h1>
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
                                          <div>Result {i + 1}</div>
                                        </div>
                                      </Grid>
                                      <Grid item xs={2} md={2}>
                                        <div className="hd-cp">
                                          <button
                                            className="cpy-btn"
                                            onClick={() =>
                                              copyToClipboard(item, i)
                                            }
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
                        <>
                          {/* <div className="err-msg">Oops Try Again !</div> */}
                        </>
                      )}
                    </>
                  )}
                </Grid>
              </>
            ) : isAuthenticated === undefined ? (
              ""
            ) : (
              <Navigate to="/login" />
            )}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Dummy;
