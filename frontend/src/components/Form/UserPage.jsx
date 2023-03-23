import React, { useState, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./form.css";
import { Grid, Button } from "@mui/material";
import Loader from "../loader/loader";
import HeaderLogo from "../../HeaderLogo";
import SidebarMenu from "../../SidebarMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { authenticate } from "../../helpers/authenticationStatus";
import { useLocation } from "react-router-dom";
import SidebarMobile from "../mobile-view/SidebarMobile";
import { leftarrow } from "../../assets";
import ReactGA from "react-ga";
import MobileForm from "./mobileForm";
import Form from "./form";
import HistoryComponent from "../History/HistoryComponent";
import MobileHistoryComponent from "../History/MobileHistoryComponent";
import CloseIcon from "@mui/icons-material/Close";
import useWindowDimensions from "../../helpers/window-dimensions";

function Dummy(props) {
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [authenticating, setAuthenticating] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isPaid, setIsPaid] = useState(true);
  const [tone, setTone] = useState("Friendly");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width > 999) {
      setShowMenu(false);
    }
  }, [width]);

  useEffect(() => {
    localStorage.setItem("categorypath", location.pathname);
  });

  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    setAuthenticated(undefined);
    authenticate((status) => {
      setAuthenticated(status === "authenticated" ? true : false);

      if (status !== "authenticated") {
        navigate("/login");
      } else {
        setAuthenticating(false);
      }
    });
  }, [location.pathname]);

  const states = {
    tone: tone,
    setTone: setTone,
    inputOne: inputOne,
    setInputOne: setInputOne,
    inputTwo: inputTwo,
    setInputTwo: setInputTwo,
    data: data,
    setData: setData,
    loading: loading,
    setLoading: setLoading,
  };

  const selectComponent = () => {
    switch (props.type) {
      case "category":
        return (
          <Form
            path={props.path}
            category={props.category}
            inputOneTitle={props.inputOneTitle}
            inputTwoTitle={props.inputTwoTitle}
            placeholderOne={props.placeholderOne}
            placeholderTwo={props.placeholderTwo}
            toneInputActive={props.toneInput}
            inputOneActive={props.inputOne}
            inputTwoActive={props.inputTwo}
            states={states}
          />
        );
      case "history":
        return <HistoryComponent />;
      default:
        return <></>;
    }
  };

  const selectMobileComponent = () => {
    switch (props.type) {
      case "category":
        return (
          <MobileForm
            path={props.path}
            category={props.category}
            inputOneTitle={props.inputOneTitle}
            inputTwoTitle={props.inputTwoTitle}
            placeholderOne={props.placeholderOne}
            placeholderTwo={props.placeholderTwo}
            toneInputActive={props.toneInput}
            inputOneActive={props.inputOne}
            inputTwoActive={props.inputTwo}
            states={states}
          />
        );
      case "history":
        return <MobileHistoryComponent />;
      default:
        return <></>;
    }
  };

  return isPaid ? (
    <>
      {!authenticating ? (
        <div className="category-page">
          <div className="category-title">
            <h2 className="category-title-text">{props.category}</h2>
            <div className="header-mobile-view">
              <HeaderLogo />
              <div className="hamburger-menu">
                <h2 onClick={() => setShowMenu(!showMenu)}>
                  {showMenu ? (
                    <button className="close-button" onClick={props.closeModal}>
                      <CloseIcon className="close-icon" />
                    </button>
                  ) : (
                    <GiHamburgerMenu />
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div className="main-division">
            <Grid container spacing={4}>
              {/* siderbar */}
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <div className="logo-panel">
                  <div className="logo-wrapper">
                    <HeaderLogo />
                  </div>
                  <SidebarMenu />
                </div>
              </Grid>

              {isAuthenticated ? (
                selectComponent()
              ) : isAuthenticated === undefined ? (
                ""
              ) : (
                <Navigate to="/login" />
              )}
            </Grid>
          </div>

          {/* Mobile View */}
          {isAuthenticated ? (
            <>
              <div className="mobile-view-product">
                <ul aria-expanded={showMenu}>
                  <li>
                    <SidebarMobile closeMenu={closeMenu} />
                  </li>
                </ul>
                {selectMobileComponent()}
              </div>
            </>
          ) : isAuthenticated === undefined ? (
            ""
          ) : (
            <Navigate to="/login" />
          )}
        </div>
      ) : (
        ""
      )}
    </>
  ) : (
    <Navigate to="/payment" />
  );
}

export default Dummy;
