import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ClassIcon from "@mui/icons-material/Class";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import catagoryList from "./components/json/category-list.json";
import { arrow } from "./assets";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { GiHamburgerMenu } from "react-icons/gi";

function SidebarMenu() {
  return (
    <>
      <div className="side-bar-wrapper">
        <div className="side-Bar">
          <Link to="/home" className="home-btn">
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
                    <Accordion.Header>{cat.parentcategory}</Accordion.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <hr className="menu-separator" />
                        {cat.childcategory.map((menu) => {
                          return (
                            <Dropdown.Item id={"bs-item-override"}>
                              <Link to={menu.url} className="category-link">
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
          <Link to="http://localhost:3000/auth/logout" className="home-btn">
            {" "}
            Logout
          </Link>
        </div>
      </div>
      {/* <div className="hamburger-menu">
        <a href="#">
          <GiHamburgerMenu />
        </a>
      </div> */}
    </>
  );
}

export default SidebarMenu;
