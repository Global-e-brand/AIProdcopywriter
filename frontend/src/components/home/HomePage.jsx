import "../home/homepage.css";
import Grid from "@mui/material/Grid";
import { fulllogo, sidebckgnd } from "../../assets";
import { robot } from "../../assets";
import InstructionModal from "../instructions/InstructionModal";
import { useState, useEffect } from "react";
import "./homepage.css";
import { Link, useLocation, Navigate } from "react-router-dom";
import MobileInstructions from "../mobile-view/MobileInstructions";
import { authenticate } from "../../helpers/authenticationStatus";

function HomePage() {
  const [Zvalue, setZvalue] = useState("1");
  const [swap, setSwap] = useState(true);
  const [showModel, setShowModel] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(undefined);

  const location = useLocation();

  useEffect(() => {
    setAuthenticated(undefined);
    authenticate((status) => {
      setAuthenticated(status === "authenticated" ? true : false);
    });
  }, [location.pathname]);

  const closeModal = () => {
    setShowModel(false);
    setSwap(!swap);
  };

  function instructions() {
    setSwap(!swap);
    setShowModel(true);
    console.log("Instruction");
  }

  function skip() {
    alert("You clicked Skip!");
  }
  const description =
    " creativewriter.ai is a revolutionary AI app that helps to generate high-quality, automatic text content in just a few clicks. This innovative tool can be used to quickly and easily create product descriptions,Ad copy, blog posts, press releases and more. With its intuitive interface and powerful features, this app will be your go-to for all writing needs!";

  return (
    <>
      <div className="bg-image-mobile homepage">
        <Grid
          container
          spacing={2}
          columns={16}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={16} sm={5} className="robot-img-homepage">
            <img
              className="robot-img"
              src={robot}
              alt="CreativeAI robot mascot"
            />
          </Grid>
          <Grid item xs={16} sm={11} alignItems="center">
            <div className="homepage-info-section">
              <div>
                <img
                  className="robot-logo"
                  src={fulllogo}
                  alt=" creativewriter.ai logo"
                />
              </div>

              <div>
                <h2 className="welcome">Welcome to creativewriter.ai!</h2>
              </div>

              <div>
                <p className="subheader">
                  Create the perfect content for your needs!
                </p>
              </div>

              <div className="content-homepage">
                <p className="description-mobile" aria-expanded={!swap}>
                  {swap ? description : <MobileInstructions />}
                </p>

                <p className="description">{description}</p>

                <Grid container spacing={2} columns={16}>
                  <Grid item xs={16} sm={16} md={8}>
                    <button
                      onClick={() => instructions()}
                      className="infobutton"
                    >
                      Instructions
                    </button>
                    {showModel && (
                      <InstructionModal
                        closeModal={closeModal}
                        enableLink={true}
                        linkValue={isAuthenticated ? "Skip" : "Get Started"}
                        linkTarget={
                          isAuthenticated ? "/productdescription" : "/login"
                        }
                      />
                    )}
                  </Grid>

                  <Grid item xs={16} sm={16} md={8}>
                    {isAuthenticated ? (
                      <Link to="/productdescription">
                        <button className="skipbutton">Skip</button>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <button className="skipbutton">Get Started</button>
                      </Link>
                    )}
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomePage;
