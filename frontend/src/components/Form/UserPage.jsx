import React, { useState, useRef, useEffect } from "react";
import "./form.css";
import { Grid, Button } from "@mui/material";
import Loader from "../loader/loader";
import HeaderLogo from "../../HeaderLogo";
import SidebarMenu from "../../SidebarMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../../Footer";
import SidebarMobile from "../mobile-view/SidebarMobile";
import Carousel from "react-bootstrap/Carousel";

function Dummy(props) {
  const [tone, setTone] = useState("Friendly");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [data, setData] = useState();
  const [path, setPath] = useState(props.path);
  const [loading, setLoading] = useState(false);
  const [Copied, setCopied] = useState();
  const [AllCopied, setAllCopied] = useState();
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

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
  let arr = [];
  return (
    <div className="category-page">
      <div className="category-title">
        <h2 className="category-title-text">
          <strong>{props.category}</strong>
        </h2>
        <div className="header-mobile-view">
          <HeaderLogo />
          <div className="hamburger-menu">
            <h2 onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu />
            </h2>
          </div>
        </div>
      </div>
      <div className="main-division">
        <Grid container spacing={4}>
          {/* siderbar */}
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <div className="logo-panel">
              <HeaderLogo />
              <SidebarMenu />
            </div>
          </Grid>
          {/* Main Form */}
          <div className="main-form-desktop-view">
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
                    onClick={() => handleSubmit(path)}
                    disabled={loading}
                    variant="contained"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Grid>
          </div>
          {/* results */}
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
                      <h1 className="text-cp-al">ALL RESULTS COPIED ! </h1>
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
        </Grid>
      </div>
      <div className="mobile-view-product">
        <ul aria-expanded={showMenu}>
          <li>
            <SidebarMobile />
          </li>
        </ul>
        <div className="main-form-mobile">
          <p>{props.category}</p>
          <Grid item xs={12}>
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
                    <Grid item xs={6}>
                      <Button
                        className={
                          tone == "Friendly" ? "tone-btn-selected" : "tone-btn"
                        }
                        onClick={(e) => handleTone("Friendly")}
                      >
                        Friendly
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                  onClick={() => handleSubmit(path)}
                  disabled={loading}
                  variant="contained"
                >
                  Submit
                </button>
              </div>
            </form>
          </Grid>
        </div>
        <div className="result-mobile-view">
          <Grid item xs={12}>
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
                      <h1 className="text-cp-al">ALL RESULTS COPIED ! </h1>
                    ) : (
                      ""
                    )}

                    <div className="output-container-mobile-view">
                      {data.map((item, i) => {
                        return (
                          <div className="output-layout-mobile-view">
                            <Grid container>
                              <Carousel>
                                <Carousel.Item>
                                  <Grid item xs={12}>
                                    <div className="ot-hd-mobile-view">
                                      <div>Result {i + 1}</div>
                                    </div>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <div className="hd-cp-mobile-view">
                                      <button
                                        className="cpy-btn"
                                        onClick={() => copyToClipboard(item, i)}
                                      >
                                        Copy
                                      </button>
                                      {Copied == i + 1 ? (
                                        <h1 className="text-status-mobile-view">
                                          Result {i + 1} Copied !{" "}
                                        </h1>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </Grid>
                                </Carousel.Item>
                              </Carousel>
                              ;
                            </Grid>
                            <div
                              className="ot-bd-mobile-view"
                              ref={textAreaRef}
                            >
                              <h6 className="instruction-desc">
                                {item.text.trim()}
                              </h6>
                            </div>
                          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Dummy;
