import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import catagoryList from "../../components/json/category-list.json";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import "../mobile-view/sidebarmobile.css";
import { Grid } from "@mui/material";
import { footerlogo } from "../../assets";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { AccordionSummary, AccordionDetails, Accordion } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

function SidebarMobile({ closeMenu }) {
  const [logout, setLogout] = useState(false);
  function handleLogout() {
    closeMenu();

    fetch("/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setLogout(data));
  }
  return (
    <>
      {logout ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="sidebar-mobile-wrapper">
            <div className="sidebar-mobile">
              <Link
                to="/home"
                onClick={closeMenu}
                className="icon-component sidebar-mobile-home-btn"
              >
                <HomeIcon />
                <p>Home</p>
              </Link>
              <Link
                to="/history"
                onClick={closeMenu}
                className="icon-component home-btn"
              >
                <HistoryIcon />
                <p>History</p>
              </Link>
              {catagoryList.map((cat, i) => {
                return (
                  <Accordion className="accordion" disableGutters>
                    <AccordionSummary
                      className="accordion-header"
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{ fontSize: "20px !important" }}
                    >
                      {cat.parentcategory}
                    </AccordionSummary>
                    <AccordionDetails className="open-accordion">
                      <hr className="menu-separator" />
                      {cat.childcategory.map((menu, key) => {
                        return (
                          <div
                            className="accordion-item"
                            style={{ fontSize: "20px !important" }}
                            key={key}
                          >
                            <Link
                              to={menu.url}
                              className="category-link"
                              style={{ fontSize: "20px !important" }}
                              onClick={closeMenu}
                            >
                              {menu.name}
                            </Link>
                          </div>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
              <button
                className="icon-component home-btn"
                onClick={() => handleLogout()}
              >
                <LogoutIcon />
                <p>Logout</p>
              </button>
            </div>
          </div>
          <div className="footer">
            <Grid
              container
              spacing={0}
              columns={20}
              textAlign="center"
              alignItems="center"
            >
              <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="mobile-footer-text"
                  >{`© 2023 AI ProdCopywriter`}</Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="mobile-footer-text"
                  >{`Smart Ecom Tech`}</Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <img
                  src={footerlogo}
                  alt="AI ProdCopywriter logo"
                  className="mobile-footer-icon"
                />
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                md={9}
                lg={9}
                xl={9}
                className="mobile-footer-text"
              >{`support@smartecomtech.com`}</Grid>
            </Grid>
          </div>
        </>
      )}
    </>
  );
}
export default SidebarMobile;
