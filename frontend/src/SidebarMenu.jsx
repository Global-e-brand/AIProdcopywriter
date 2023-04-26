import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ClassIcon from "@mui/icons-material/Class";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import catagoryList from "./components/json/category-list.json";
import { arrow } from "./assets";
import { getBrowserID } from "./helpers/browserID/get-brower-id.js";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Newsletterpopup from "./components/Newsletter/Newsletterpopup";

function SidebarMenu(props) {
  const [logout, setLogout] = useState(false);
  const [isAdmin, setAdmin] = useState();

  useEffect(() => {
    async function userAccess() {
      let res = await fetch("/useraccess", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let response = res.json();
      response.then((isAdmin) => {
        setAdmin(isAdmin);
      });
    }

    userAccess();
  }, []);

  function handleLogout() {
    fetch("/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setLogout(data));
  }
  return logout ? (
    <Navigate to="/" />
  ) : (
    <>
      <div className="side-bar-menu">
        <div className="static-menu-items">
          <Link to="/home" className="icon-component home-btn">
            <HomeIcon />
            <p>Home</p>
          </Link>

          {isAdmin ? (
            <>
              <Link to="/dashboard" className="icon-component home-btn">
                <p>Dashboard</p>
              </Link>
            </>
          ) : (
            ""
          )}

          <Link to="/history" className="icon-component home-btn">
            <HistoryIcon />
            <p>History</p>
          </Link>

          <Link to="/image-generator" className="icon-component home-btn">
            <p>Image Generation</p>
          </Link>
          <Link to="/image-detector" className="icon-component home-btn">
            <p>Image Detection</p>
          </Link>

          {isAdmin ? (
            <>
              <Link to="/settings" className="icon-component home-btn">
                <p>Settings</p>
              </Link>
            </>
          ) : (
            ""
          )}

          <button
            className="icon-component home-btn"
            onClick={() => handleLogout()}
          >
            <LogoutIcon />
            <p>Logout</p>
          </button>
        </div>
        <div className="scrollable-menu-items">
          {catagoryList.map((cat, i) => {
            return (
              <Accordion className="accordion" disableGutters>
                <AccordionSummary
                  className="accordion-header"
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {cat.parentcategory}
                </AccordionSummary>
                <AccordionDetails className="open-accordion">
                  <hr className="menu-separator" />
                  {cat.childcategory.map((menu, key) => {
                    return (
                      <div className="accordion-item" key={key}>
                        <Link to={menu.url} className="category-link">
                          {menu.name}
                        </Link>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SidebarMenu;
