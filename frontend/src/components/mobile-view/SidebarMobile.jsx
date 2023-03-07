import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import catagoryList from "../../components/json/category-list.json";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "../mobile-view/sidebarmobile.css";
import { Grid } from "@mui/material";
import { footerlogo } from "../../assets";

function SidebarMobile() {
  return (
    <>
      <div className="sidebar-mobile-wrapper">
        <div className="sidebar-mobile">
          <Link to="/" className="sidebar-mobile-home-btn">
            {" "}
            Home
          </Link>
          {catagoryList.map((cat, i) => {
            return (
              <Accordion>
                <Card>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ fontSize: "20px !important" }}>
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
        </div>
      </div>
      <div className="footer">
        <Grid container spacing={0}>
          <Grid item xs={8} sm={6} md={2} lg={2} xl={2}>
            <img src={footerlogo} alt="AI ProdCopywriter logo" />
          </Grid>
          <Grid item xs={4} sm={6} md={8} lg={2} xl={2}>
            {`© 2023 AI ProdCopywriter`}
          </Grid>

          <Grid item xs={8} sm={6} md={2} lg={2} xl={2}>
            {`support@smartecomtech.com`}
          </Grid>

          <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
            {`Smart Ecom Tech`}
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            {/* {`(*Contact Detail*)`} */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default SidebarMobile;
