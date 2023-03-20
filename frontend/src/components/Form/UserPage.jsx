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
<<<<<<< HEAD
import ReactGA from 'react-ga';
=======
import MobileForm from "./mobileForm";
import Form from "./form";
import HistoryComponent from "../History/HistoryComponent";
import MobileHistoryComponent from "../History/MobileHistoryComponent";
>>>>>>> feature/jason

function Dummy(props) {
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isPaid, setIsPaid] = useState(true);

  const location = useLocation();

  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    setAuthenticated(undefined);
    authenticate((status) => {
      setAuthenticated(status === "authenticated" ? true : false);
    });
  }, [location.pathname]);

<<<<<<< HEAD
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
      category:path,
      action:"test",
      label:"test"
    })
    
    if (text == null) {
      setLoading(true);
=======
  const selectComponent = () => {
    console.log(props.type);
    switch (props.type) {
      case "category":
        return (
          <Form
            path={props.path}
            category={props.category}
            inputOne={props.inputOne}
            inputOneTitle={props.inputOneTitle}
            inputTwo={props.inputTwo}
            inputTwoTitle={props.inputTwoTitle}
            toneInput={props.toneInput}
            placeholderOne={props.placeholderOne}
            placeholderTwo={props.placeholderTwo}
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
            inputOne={props.inputOne}
            inputOneTitle={props.inputOneTitle}
            inputTwo={props.inputTwo}
            inputTwoTitle={props.inputTwoTitle}
            toneInput={props.toneInput}
            placeholderOne={props.placeholderOne}
            placeholderTwo={props.placeholderTwo}
          />
        );
      case "history":
        return <MobileHistoryComponent />;
      default:
        return <></>;
>>>>>>> feature/jason
    }
  };

  return isPaid ? (
    <>
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
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="logo-panel">
                <HeaderLogo />
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
    </>
  ) : (
    <Navigate to="/payment" />
  );
}

export default Dummy;
