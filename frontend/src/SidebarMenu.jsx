import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ClassIcon from "@mui/icons-material/Class";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import catagoryList from "./components/json/category-list.json";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SidebarMenu() {
  return (
    <div className="side-Bar">
      <Button className="home-btn"> Home</Button>

      {console.log("catagoryList", catagoryList)}

      {catagoryList.map((cat, i) => {
        return (
          <Dropdown>
            <Dropdown.Toggle
              id={`dropdown-button-dark-example-${i}`}
              variant="secondary"
            >
              {cat.parentcategory}
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              {cat.childcategory.map((menu) => {
                return (
                  <Dropdown.Item href={menu.url}>
                    {menu.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        );
      })}
    </div>
  );
}

export default SidebarMenu;
