import React, { useState } from "react";
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

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { GiHamburgerMenu } from "react-icons/gi";

function SidebarMenu() {
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
  return logout ? (
    <Navigate to="/" />
  ) : (
    <div className="side-bar-menu">
      <div className="static-menu-items">
        <Link to="/home" className="icon-component home-btn">
          <HomeIcon />
          <p>Home</p>
        </Link>
        <Link to="/history" className="icon-component home-btn">
          <HistoryIcon />
          <p>History</p>
        </Link>
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
            <Accordion>
              <Card>
                <Accordion.Item eventKey="0" key={i}>
                  <Accordion.Header>{cat.parentcategory}</Accordion.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <hr className="menu-separator" />
                      {cat.childcategory.map((menu, key) => {
                        return (
                          <Dropdown.Item id={"bs-item-override"} key={key}>
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
      </div>
    </div>
  );
}

export default SidebarMenu;
