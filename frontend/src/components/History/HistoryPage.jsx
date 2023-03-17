import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import HeaderLogo from "../../HeaderLogo";
import SidebarMenu from "../../SidebarMenu";
import "./HistoryPage.css";
import { Grid, Button, Card } from "@mui/material";
import Loader from "../loader/loader";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { Navigate, useLocation } from "react-router-dom";
import { authenticate } from "../../helpers/authenticationStatus";

const HistoryPage = () => {
  const [toDayData, setToDayData] = useState();
  const [yesterdayData, setYesterdayData] = useState();
  const [thisweekData, setThisweekData] = useState();
  const [lastweekData, setLastweekData] = useState();
  const [isAuthenticated, setAuthenticated] = useState();

  const location = useLocation();

  useEffect(() => {
    setAuthenticated(undefined);
    authenticate((status) => {
      setAuthenticated(status === "authenticated" ? true : false);
    });
  }, [location.pathname]);

  useEffect(() => {
    const lamda = async () => {
      console.log("HistoryPage");
      let res = await fetch("/content/history", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let response = res.json();

      response.then((data) => {
        setToDayData(data[0].toDayData);
        setYesterdayData(data[1].yesterdayData);
        setThisweekData(data[2].thisweekData);
        setLastweekData(data[3].lastweekData);
      });
    };
    lamda();
  }, []);

  return (
    <>
      <div className="category-page">
        {/* Recently Saved Searches Title */}
        {console.log("toDayData", toDayData)}
        {console.log("yesterdayData", yesterdayData)}
        {console.log("thisweekData", thisweekData)}
        {console.log("lastweekData", lastweekData)}

        <div className="category-title">
          <h2 className="category-title-text">
            <strong>Recently Used Categories</strong>
          </h2>
        </div>

        <div className="main-division">
          <Grid container spacing={4}>
            {/* sidebar */}
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <div className="logo-panel">
                <HeaderLogo />
                <SidebarMenu />
              </div>
            </Grid>
            {isAuthenticated ? (
              <Grid
                item
                xs={9}
                sm={9}
                md={9}
                lg={9}
                xl={9}
                align-items="center"
              >
                {/* today accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>Today</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {/* card description 1 */}
                      <Card className="indivcard">
                        <Grid container spacing={2} columns={16}>
                          {/* card headings */}
                          <Grid item lg={2}>
                            <div>
                              <strong>Category</strong>
                            </div>
                            <div>
                              <strong>Tone</strong>
                            </div>
                            <div>
                              <strong>Description</strong>
                            </div>
                          </Grid>
                          {/* card input infomation */}
                          <Grid item lg={6}>
                            <div>
                              <card-text>Product Description</card-text>
                            </div>
                            <div>
                              <card-text>Friendly</card-text>
                            </div>
                            <div>
                              <card-text>
                                a warm and lightweight fur winter coat
                              </card-text>
                            </div>
                          </Grid>
                          {/* carousel of description */}
                          <Grid item lg={8}>
                            <Card className="instruction-carousel">
                              <Carousel>
                                <Carousel.Item className="cardescard">
                                  <div className="cardestyle">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                  </div>
                                </Carousel.Item>
                                <Carousel.Item className="cardescard">
                                  <div className="cardestyle">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                  </div>
                                </Carousel.Item>
                                <Carousel.Item className="cardescard">
                                  <div className="cardestyle">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                  </div>
                                </Carousel.Item>
                                <Carousel.Item className="cardescard">
                                  <div className="cardestyle">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                  </div>
                                </Carousel.Item>
                                <Carousel.Item className="cardescard">
                                  <div className="cardestyle">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                  </div>
                                </Carousel.Item>
                              </Carousel>
                            </Card>
                          </Grid>
                        </Grid>
                      </Card>
                      <div className="btwcards" />

                      {/* card description 2 */}
                      <Card className="indivcard">
                        <Grid container spacing={2} columns={16}>
                          <Grid item lg={2}>
                            <div>
                              <strong>Category</strong>
                            </div>
                            <div>
                              <strong>Tone</strong>
                            </div>
                            <div>
                              <strong>Description</strong>
                            </div>
                          </Grid>
                          <Grid item lg={6}>
                            <div>
                              <card-text>Product Description</card-text>
                            </div>
                            <div>
                              <card-text>Professional</card-text>
                            </div>
                            <div>
                              <card-text>
                                a warm and lightweight fur winter coat
                              </card-text>
                            </div>
                          </Grid>
                          <Grid item lg={8}>
                            <Card className="instruction-carousel">
                              <div className="destyle">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.
                              </div>
                            </Card>
                          </Grid>
                        </Grid>
                      </Card>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <div className="btwcards" />
              </Grid>
            ) : isAuthenticated === undefined ? (
              ""
            ) : (
              <Navigate to="/login" />
            )}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
