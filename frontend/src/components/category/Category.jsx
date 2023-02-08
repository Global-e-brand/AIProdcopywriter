import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Category() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <DropdownButton
                    key={"end"}
                    drop={"end"}
                    variant="Primary"
                    title="Parent Category"
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Child Category1
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Child Category2
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Child Category3
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </DropdownButton>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Parent Category2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Parent Category3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Category;
