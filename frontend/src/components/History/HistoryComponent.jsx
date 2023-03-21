import React, { useState, useEffect } from "react";
import "./HistoryPage.css";
import { Grid, Card } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HistoryComponent = () => {
  const [toDayData, setToDayData] = useState();
  const [yesterdayData, setYesterdayData] = useState();
  const [thisweekData, setThisweekData] = useState();
  const [lastweekData, setLastweekData] = useState();

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

  const txt_msg = {
    today: "Today",
    yesterday: "Yesterday",
    thisweek: "This Week",
    lastweek: "Last Week",
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
              {toDayData && toDayData?.length !== 0 ? (
                toDayData.map((item, i) => (
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
              {yesterdayData && yesterdayData?.length !== 0 ? (
                yesterdayData.map((item, i) => (
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
              {thisweekData && thisweekData?.length !== 0 ? (
                thisweekData.map((item, i) => (
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
              {lastweekData && lastweekData?.length !== 0 ? (
                lastweekData.map((item, i) => (
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
                ))
              ) : (
                <div className="n-txt">{txt_msg.lastweek_no_txt}</div>
              )}
            </div>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
};

export default HistoryComponent;
