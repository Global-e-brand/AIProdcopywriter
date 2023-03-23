import React, { useState, useEffect } from "react";
import "./HistoryPage.css";
import { Grid, Card, Pagination } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Loader from "../loader/loader";

const HistoryComponent = () => {
  const [toDayData, setToDayData] = useState();
  const [yesterdayData, setYesterdayData] = useState();
  const [thisweekData, setThisweekData] = useState();
  const [lastweekData, setLastweekData] = useState();
  const [today_page, setTodayPage] = useState(1);
  const [yesterday_page, setYesterdayPage] = useState(1);
  const [thisweek_page, setThisweekPage] = useState(1);
  const [lastweek_page, setLastweekPage] = useState(1);

  useEffect(() => {
    const lamda = async () => {
      console.log("HistoryPage");
      let res = await fetch(
        `/content/history?todaypage=${today_page}&&yesterdaypage=${yesterday_page}&&thisweekpage=${thisweek_page}&&lastweekpage=${lastweek_page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let response = res.json();

      response.then((data) => {
        console.log("data", data);
        setToDayData(data[0].toDayData);
        setYesterdayData(data[1].yesterdayData);
        setThisweekData(data[2].thisweekData);
        setLastweekData(data[3].lastweekData);
      });
    };
    lamda();
  }, [today_page,yesterday_page,thisweek_page, lastweek_page]);

  const txt_msg = {
    today: "Today",
    yesterday: "Yesterday",
    thisweek: "This Week",
    lastweek: "Last Week",
    category: "Category",
    input_one: "Input One",
    input_two: "Input Two",
    tone: "Tone",
    today_no_txt: "There is no saved history for today",
    ystrdy_no_txt: "There was no saved history yesterday",
    thisweek_no_txt: "There was no saved history this week",
    lastweek_no_txt: "There was no saved history last week",
  };

  function handlePagination(pagecount,defaultpage,setVar){
    return  <Pagination
    className="pagination-wrap"
    count={pagecount}
    color="primary"
    defaultPage={defaultpage}
    onChange={(e, v) => setVar(v)}
    showFirstButton showLastButton
  />
  }

  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        lg={9}
        xl={9}
      >
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
              {toDayData ? (
                toDayData.items?.length !== 0 ? (
                  <>
                    {toDayData.items.map((item, i) => (
                      <Card className="indivcard">
                        <Grid container spacing={2}>
                          {/* card headings */}
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Grid container>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>{txt_msg.category}</strong>
                                </div>
                                <div>
                                  <card-text>{item.category}</card-text>
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>{txt_msg.input_one}</strong>
                                </div>
                                <div>
                                  <card-text>{item.question_one}</card-text>
                                </div>
                              </Grid>
                              {item.question_two != "" ? (
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  className="card-header-section-history"
                                >
                                  <div className="card-subheader-history">
                                    <strong>{txt_msg.input_two}</strong>
                                  </div>
                                  <div>
                                    <card-text>{item.question_two}</card-text>
                                  </div>
                                </Grid>
                              ) : (
                                ""
                              )}
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>Tone</strong>
                                </div>
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
                    ))}

                   {handlePagination(toDayData.pageCount,today_page,setTodayPage)}
                  </>
                ) : (
                  <div className="n-txt">{txt_msg.today_no_txt}</div>
                )
              ) : (
                <Loader color="#90bcfb" />
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
              {yesterdayData ? (
                yesterdayData.items?.length !== 0 ? (
                  <>
                    {yesterdayData.items.map((item, i) => (
                      <Card className="indivcard">
                        <Grid container spacing={2}>
                          {/* card headings */}
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Grid container>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>{txt_msg.category}</strong>
                                </div>
                                <div>
                                  <card-text>{item.category}</card-text>
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>{txt_msg.input_one}</strong>
                                </div>
                                <div>
                                  <card-text>{item.question_one}</card-text>
                                </div>
                              </Grid>
                              {item.question_two != "" ? (
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  className="card-header-section-history"
                                >
                                  <div className="card-subheader-history">
                                    <strong>{txt_msg.input_two}</strong>
                                  </div>
                                  <div>
                                    <card-text>{item.question_two}</card-text>
                                  </div>
                                </Grid>
                              ) : (
                                ""
                              )}
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>Tone</strong>
                                </div>
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
                    ))}
                    {handlePagination(yesterdayData.pageCount,yesterday_page,setYesterdayPage)}                    
                  </>
                ) : (
                  <div className="n-txt">{txt_msg.ystrdy_no_txt}</div>
                )
              ) : (
                <Loader color="#90bcfb" />
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
              {thisweekData ? (
                thisweekData.items?.length !== 0 ? (
                  <>
                    {thisweekData.items.map((item, i) => (
                      <Card className="indivcard">
                        <Grid container spacing={2}>
                          {/* card headings */}
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Grid container>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>{txt_msg.category}</strong>
                                </div>
                                <div>
                                  <card-text>{item.category}</card-text>
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>{txt_msg.input_one}</strong>
                                </div>
                                <div>
                                  <card-text>{item.question_one}</card-text>
                                </div>
                              </Grid>
                              {item.question_two != "" ? (
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  className="card-header-section-history"
                                >
                                  <div className="card-subheader-history">
                                    <strong>{txt_msg.input_two}</strong>
                                  </div>
                                  <div>
                                    <card-text>{item.question_two}</card-text>
                                  </div>
                                </Grid>
                              ) : (
                                ""
                              )}
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>Tone</strong>
                                </div>
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
                    ))}
                    {handlePagination(thisweekData.pageCount,thisweek_page,setThisweekPage)}                    
                    
                  </>
                ) : (
                  <div className="n-txt">{txt_msg.thisweek}</div>
                )
              ) : (
                <Loader color="#90bcfb" />
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
              {lastweekData ? (
                lastweekData.items?.length !== 0 ? (
                  <>
                    {lastweekData.items.map((item, i) => (
                      <Card className="indivcard">
                        <Grid container spacing={2}>
                          {/* card headings */}
                          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Grid container>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>{txt_msg.category}</strong>
                                </div>
                                <div>
                                  <card-text>{item.category}</card-text>
                                </div>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>{txt_msg.input_one}</strong>
                                </div>
                                <div>
                                  <card-text>{item.question_one}</card-text>
                                </div>
                              </Grid>
                              {item.question_two != "" ? (
                                <Grid
                                  item
                                  xs={12}
                                  sm={12}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  className="card-header-section-history"
                                >
                                  <div className="card-subheader-history">
                                    <strong>{txt_msg.input_two}</strong>
                                  </div>
                                  <div>
                                    <card-text>{item.question_two}</card-text>
                                  </div>
                                </Grid>
                              ) : (
                                ""
                              )}
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className="card-header-section-history"
                              >
                                <div className="card-subheader-history">
                                  <strong>Tone</strong>
                                </div>
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
                    ))}
                    {handlePagination(lastweekData.pageCount,lastweek_page,setLastweekPage)}
                   
                  </>
                ) : (
                  <div className="n-txt">{txt_msg.lastweek_no_txt}</div>
                )
              ) : (
                <Loader color="#90bcfb" />
              )}
            </div>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
};

export default HistoryComponent;
