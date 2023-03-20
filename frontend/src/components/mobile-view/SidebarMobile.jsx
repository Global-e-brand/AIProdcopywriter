import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import catagoryList from "../../components/json/category-list.json";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "../mobile-view/sidebarmobile.css";
import { Grid } from "@mui/material";
import { footerlogo } from "../../assets";

function SidebarMobile({ closeMenu }) {
  const [logout, setLogout] = useState(false);
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
  return (
    <>
      {logout ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="sidebar-mobile-wrapper">
            <div className="sidebar-mobile">
              <Link to="/home" className="sidebar-mobile-home-btn">
                {" "}
                Home
              </Link>
              <Link to="/history" className="home-btn">
                History
              </Link>
              {catagoryList.map((cat, i) => {
                return (
                  <Accordion>
                    <Card>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header
                          style={{ fontSize: "20px !important" }}
                        >
                          {cat.parentcategory}
                        </Accordion.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <hr className="menu-separator" />
                            {cat.childcategory.map((menu) => {
                              return (
                                <Dropdown.Item
                                  id={"bs-item-override"}
                                  style={{ fontSize: "20px !important" }}
                                >
                                  <Link
                                    to={menu.url}
                                    className="category-link"
                                    style={{ fontSize: "20px !important" }}
                                    onClick={closeMenu}
                                  >
                                    {menu.name}
                                  </Link>
                                </Dropdown.Item>
                              );
                            })}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    </Card>
                  </Accordion>
                );
              })}
              <button className="home-btn" onClick={() => handleLogout()}>
                {" "}
                Logout
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
