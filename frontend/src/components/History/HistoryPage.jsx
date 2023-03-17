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
import CarouselSlider from "react-carousel-slider";
import { Navigate, useLocation } from "react-router-dom";
import { authenticate } from "../../helpers/authenticationStatus";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarMobile from "../mobile-view/SidebarMobile";

const HistoryPage = () => {
  const [toDayData, setToDayData] = useState([]);
  const [yesterdayData, setYesterdayData] = useState([]);
  const [thisweekData, setThisweekData] = useState([]);
  const [lastweekData, setLastweekData] = useState([]);
  const [isAuthenticated, setAuthenticated] = useState();
  const [showMenu, setShowMenu] = useState(false);

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

  const closeMenu = () => {
    setShowMenu(false);
  };

  const txt_msg = {
    today: "Today",
    yesterday: "Yesterday",
    thisweek: "ThisWeek",
    lastweek: "Lastweek",
    category: "Category",
    input_one: "Input One",
    input_two: "Input Two",
    tone: "Tone",
    today_no_txt: "There is No History Saved for Today",
    ystrdy_no_txt: "There is No History Saved for yesterday",
    thisweek_no_txt: "There is No History Saved for ThisWeek",
    lastweek_no_txt: "There is No History Saved for LastWeek",
  };

  return (
    <>
      <div className="category-page">
        {/* Recently Saved Searches Title */}

        <div className="category-title">
          <h2 className="category-title-text">
            <strong>Recently Used Categories</strong>
          </h2>
          <div className="header-mobile-view">
            <HeaderLogo />
            <div className="hamburger-menu">
              <h2 onClick={() => setShowMenu(!showMenu)}>
                <GiHamburgerMenu />
              </h2>
            </div>
          </div>
        </div>

        {/* Desktop View start */}
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
              <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                {/* today accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>{txt_msg.today}</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {toDayData.length !== 0 ? (
                        toDayData.map((item, i) => (
                          <Card className="indivcard">
                            <Grid container spacing={2}>
                              {/* card headings */}
                              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Grid container spacing={2}>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <strong>{txt_msg.category}</strong>
                                    </div>
                                    <div>
                                      <strong>{txt_msg.input_one}</strong>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <strong>{txt_msg.input_two}</strong>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <strong>Tone</strong>
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <card-text>{item.category}</card-text>
                                    </div>
                                    <div>
                                      <card-text>{item.question_one}</card-text>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <card-text>
                                          {item.question_two}
                                        </card-text>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <card-text>{item.tone}</card-text>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>

                              {/* carousel of description */}
                              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Card className="instruction-carousel-history">
                                  {item.single_content}
                                </Card>
                              </Grid>
                            </Grid>
                          </Card>
                        ))
                      ) : (
                        <div className="n-txt">{txt_msg.today_no_txt}</div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* yesterday accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>{txt_msg.yesterday}</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {yesterdayData.length !== 0 ? (
                        yesterdayData.map((item, i) => (
                          <Card className="indivcard">
                            <Grid container spacing={2}>
                              {/* card headings */}
                              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Grid container spacing={2}>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <strong>{txt_msg.category}</strong>
                                    </div>
                                    <div>
                                      <strong>{txt_msg.input_one}</strong>
                                      consequat.
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <strong>{txt_msg.input_two}</strong>
                                        consequat.
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <strong>Tone</strong>
                                      consequat.
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <card-text>{item.category}</card-text>
                                    </div>
                                    <div>
                                      <card-text>{item.question_one}</card-text>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <card-text>
                                          {item.question_two}
                                        </card-text>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <card-text>{item.tone}</card-text>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Card className="instruction-carousel-history">
                                  {item.single_content}
                                </Card>
                              </Grid>
                            </Grid>
                          </Card>
                        ))
                      ) : (
                        <div className="n-txt">{txt_msg.ystrdy_no_txt}</div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* thisweekData accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>{txt_msg.thisweek}</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {thisweekData.length !== 0 ? (
                        thisweekData.map((item, i) => (
                          <Card className="indivcard">
                            <Grid container spacing={2}>
                              {/* card headings */}
                              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Grid container spacing={2}>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <strong>{txt_msg.category}</strong>
                                    </div>
                                    <div>
                                      <strong>{txt_msg.input_one}</strong>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <strong>{txt_msg.input_two}</strong>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <strong>Tone</strong>
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <card-text>{item.category}</card-text>
                                    </div>
                                    <div>
                                      <card-text>{item.question_one}</card-text>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <card-text>
                                          {item.question_two}
                                        </card-text>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <card-text>{item.tone}</card-text>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Card className="instruction-carousel-history">
                                  {item.single_content}
                                </Card>
                              </Grid>
                            </Grid>
                          </Card>
                        ))
                      ) : (
                        <div className="n-txt">{txt_msg.thisweek}</div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* lastweek accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>{txt_msg.lastweek}</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {lastweekData.length !== 0 ? (
                        lastweekData.map((item, i) => (
                          <Card className="indivcard">
                            <Grid container spacing={2}>
                              {/* card headings */}
                              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Grid container spacing={2}>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <strong>{txt_msg.category}</strong>
                                    </div>
                                    <div>
                                      <strong>{txt_msg.input_one}</strong>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <strong>{txt_msg.input_two}</strong>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <strong>Tone</strong>
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <card-text>{item.category}</card-text>
                                    </div>
                                    <div>
                                      <card-text>{item.question_one}</card-text>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <card-text>
                                          {item.question_two}
                                        </card-text>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <card-text>{item.tone}</card-text>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Card className="instruction-carousel-history">
                                  {item.single_content}
                                </Card>
                              </Grid>
                            </Grid>
                          </Card>
                        ))
                      ) : (
                        <div className="n-txt">{txt_msg.lastweek_no_txt}</div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ) : isAuthenticated === undefined ? (
              ""
            ) : (
              <Navigate to="/login" />
            )}
          </Grid>
        </div>
        {/* Desktop View End */}

        {/* Mobile View start */}
        {isAuthenticated ? (
          <>
            <div className="mobile-view-product">
              <ul aria-expanded={showMenu}>
                <li>
                  <SidebarMobile closeMenu={closeMenu} />
                </li>
              </ul>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                {/* today accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>{txt_msg.today}</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {toDayData.length !== 0 ? (
                        toDayData.map((item, i) => (
                          <Card className="indivcard">
                            <Grid container spacing={2}>
                              {/* card headings */}
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Grid container spacing={2}>
                                  {/* <div className="history-mobileview-card-headings"> */}
                                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                      <strong>{txt_msg.category}</strong>
                                    </div>
                                    <div>
                                      <strong>{txt_msg.input_one}</strong>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <strong>{txt_msg.input_two}</strong>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <strong>Tone</strong>
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                      <card-text>{item.category}</card-text>
                                    </div>
                                    <div>
                                      <card-text>{item.question_one}</card-text>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <card-text>
                                          {item.question_two}
                                        </card-text>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <card-text>{item.tone}</card-text>
                                    </div>
                                  </Grid>
                                  {/* </div> */}
                                </Grid>
                              </Grid>

                              {/* carousel of description */}
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Card className="instruction-carousel-history">
                                  {item.single_content}
                                </Card>
                              </Grid>
                            </Grid>
                          </Card>
                        ))
                      ) : (
                        <div className="n-txt">{txt_msg.today_no_txt}</div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* yesterday accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>{txt_msg.yesterday}</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {yesterdayData.length !== 0 ? (
                        yesterdayData.map((item, i) => (
                          <Card className="indivcard">
                            <Grid container spacing={2}>
                              {/* card headings */}
                              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Grid container spacing={2}>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <strong>{txt_msg.category}</strong>
                                    </div>
                                    <div>
                                      <strong>{txt_msg.input_one}</strong>
                                      consequat.
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <strong>{txt_msg.input_two}</strong>
                                        consequat.
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <strong>Tone</strong>
                                      consequat.
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <card-text>{item.category}</card-text>
                                    </div>
                                    <div>
                                      <card-text>{item.question_one}</card-text>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <card-text>
                                          {item.question_two}
                                        </card-text>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <card-text>{item.tone}</card-text>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Card className="instruction-carousel-history">
                                  {item.single_content}
                                </Card>
                              </Grid>
                            </Grid>
                          </Card>
                        ))
                      ) : (
                        <div className="n-txt">{txt_msg.ystrdy_no_txt}</div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* thisweekData accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>{txt_msg.thisweek}</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {thisweekData.length !== 0 ? (
                        thisweekData.map((item, i) => (
                          <Card className="indivcard">
                            <Grid container spacing={2}>
                              {/* card headings */}
                              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Grid container spacing={2}>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <strong>{txt_msg.category}</strong>
                                    </div>
                                    <div>
                                      <strong>{txt_msg.input_one}</strong>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <strong>{txt_msg.input_two}</strong>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <strong>Tone</strong>
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <card-text>{item.category}</card-text>
                                    </div>
                                    <div>
                                      <card-text>{item.question_one}</card-text>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <card-text>
                                          {item.question_two}
                                        </card-text>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <card-text>{item.tone}</card-text>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Card className="instruction-carousel-history">
                                  {item.single_content}
                                </Card>
                              </Grid>
                            </Grid>
                          </Card>
                        ))
                      ) : (
                        <div className="n-txt">{txt_msg.thisweek}</div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>

                {/* lastweek accordion */}
                <Accordion className="closeacc">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <strong>{txt_msg.lastweek}</strong>
                  </AccordionSummary>
                  <AccordionDetails className="openacc">
                    <div>
                      {lastweekData.length !== 0 ? (
                        lastweekData.map((item, i) => (
                          <Card className="indivcard">
                            <Grid container spacing={2}>
                              {/* card headings */}
                              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Grid container spacing={2}>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <strong>{txt_msg.category}</strong>
                                    </div>
                                    <div>
                                      <strong>{txt_msg.input_one}</strong>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <strong>{txt_msg.input_two}</strong>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <strong>Tone</strong>
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={6}
                                    xl={6}
                                  >
                                    <div>
                                      <card-text>{item.category}</card-text>
                                    </div>
                                    <div>
                                      <card-text>{item.question_one}</card-text>
                                    </div>
                                    {item.question_two != "" ? (
                                      <div>
                                        <card-text>
                                          {item.question_two}
                                        </card-text>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div>
                                      <card-text>{item.tone}</card-text>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <Card className="instruction-carousel-history">
                                  {item.single_content}
                                </Card>
                              </Grid>
                            </Grid>
                          </Card>
                        ))
                      ) : (
                        <div className="n-txt">{txt_msg.lastweek_no_txt}</div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </div>
          </>
        ) : isAuthenticated === undefined ? (
          ""
        ) : (
          <Navigate to="/login" />
        )}
        {/* Mobile View End */}
      </div>
    </>
  );
};

export default HistoryPage;
