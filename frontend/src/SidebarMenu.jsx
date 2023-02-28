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

function SidebarMenu() {
  return (
    <div className="side-Bar">
      <a href="/" className="home-btn">
        {" "}
        <Button className="home-btn"> Home</Button>
      </a>

      {catagoryList.map((cat, i) => {
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{cat.parentcategory}</Accordion.Header>
              <Accordion.Body>
                {cat.childcategory.map((menu) => {
                  return (
                    <Dropdown.Item id={"bs-item-override"} href={menu.url}>
                      {menu.name}
                    </Dropdown.Item>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
}

export default SidebarMenu;
