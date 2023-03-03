import "../home/homepage.css";
import Grid from "@mui/material/Grid";
import { fulllogo, sidebckgnd } from "../../assets";
import { robot } from "../../assets";
import InstructionModal from "../instructions/InstructionModal";
import { useState } from "react";

function HomePage() {
  const [Zvalue, setZvalue] = useState("1");
  const [swap, setSwap] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const closeModal = () => {
    setZvalue("1");
    setShowModel(false);
    setSwap(!swap);
  };

  function instructions() {
    setSwap(!swap);
    setShowModel(true);
    setZvalue("-1");
  }

  function skip() {
    alert("You clicked Skip!");
  }
  const hh = () => {
    return (
      <p className="instructionMobile">
        #1 Select the Desire Category<br></br>#2 Answer the following questions
        and set the Tone<br></br>#3 Hit the Create Content button and Boom!!
      </p>
    );
  };
  return (
    <>
      <div className="bg-image-mobile"></div>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8} className="robot-img-homepage">
          <img
            src={robot}
            alt="AI ProdCopywriter robot mascot"
            style={{
              width: "75%",
              height: "95%",
              marginTop: "4.5%",
              marginLeft: "17%",
            }}
          />
        </Grid>
        <Grid item xs={8} className="logo-homepage">
          <div>
            <img
              src={fulllogo}
              alt="AI ProdCopywriter logo"
              className="logo-homepage"
              style={{
                width: "80%",
                height: "80%",
                marginTop: "12%",
                marginLeft: "-5%",
                marginBottom: "7%",
              }}
            />
          </div>

          <div>
            <h2
              style={{ marginLeft: "1%", fontSize: "30px", fontWeight: "bold" }}
              className="title-homepage"
            >
              Welcome to AI ProdCopywriter!
            </h2>
          </div>

          <div className="subtitle-homepage">
            <p style={{ marginLeft: "5%", fontSize: "18px" }}>
              Create the perfect description for your needs!
            </p>
          </div>
          <div className="flip-card">
            <div className="content-homepage">
              <p
                style={{
                  marginRight: "20%",
                  marginLeft: "-5%",
                  fontSize: "18px",
                }}
                aria-expanded={swap}
              >
                {swap
                  ? hh()
                  : "AIProdCopyWriter is a revolutionary AI app that helps to generate high-quality, automatic text content in just a few clicks. This innovative tool can be used to quickly and easily create product descriptions,Ad copy, blog posts, press releases and more. With its intuitive interface and powerful features, this app will be your go-to for all writing needs!"}
              </p>
            </div>
          </div>

          <Grid container spacing={4} columns={16}>
            <div className="instruction-skip-btn-homepage">
              <Grid item xs={6}>
                <button onClick={() => instructions()} className="infobutton">
                  Instructions
                </button>
                {showModel && (
                  <InstructionModal
                    closeModal={closeModal}
                    style={{
                      "@media (max-width: 600px)": {
                        display: "none",
                      },
                    }}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                <a href="/productdescription">
                  <button className="skipbutton" style={{ zIndex: Zvalue }}>
                    Skip
                  </button>
                </a>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
