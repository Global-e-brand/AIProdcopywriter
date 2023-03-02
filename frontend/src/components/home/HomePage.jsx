// import "./App.css";
import Grid from "@mui/material/Grid";
import { fulllogo, sidebckgnd } from "../../assets";
import { robot } from "../../assets";
import InstructionModal from "../instructions/InstructionModal";
import { useState } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [showModel, setShowModel] = useState(false);
  const closeModal = () => {
    setShowModel(false);
  };

  function instructions() {
    setShowModel(true);
  }

  function skip() {
    alert("You clicked Skip!");
  }
  return (
    <div className="homepage">
      <Grid container spacing={2} columns={16}>
        <Grid item sm={16} md={6}>
          <img
            className="robot-img"
            src={robot}
            alt="AI ProdCopywriter robot mascot"
          />
        </Grid>
        <Grid item sm={16} md={10}>
          <div>
            <img
              className="robot-logo"
              src={fulllogo}
              alt="AI ProdCopywriter logo"
            />
          </div>

          <div>
            <h2 className="welcome">Welcome to AI ProdCopywriter!</h2>
          </div>

          <div>
            <p className="subheader">
              Create the perfect description for your needs!
            </p>
          </div>

          <div>
            <p className="description">
              AIProdCopyWriter is a revolutionary AI app that helps to generate
              high-quality, automatic text content in just a few clicks. This
              innovative tool can be used to quickly and easily create product
              descriptions,Ad copy, blog posts, press releases and more. With
              its intuitive interface and powerful features, this app will be
              your go-to for all writing needs!
            </p>
          </div>

          <Grid container spacing={2} columns={16}>
            <Grid item xs={8} sm={16} md={8}>
              <button onClick={() => instructions()} className="infobutton">
                Instructions
              </button>
              {showModel && <InstructionModal closeModal={closeModal} />}
            </Grid>

            <Grid item xs={6} sm={16} md={8}>
              <Link to="/productdescription">
                <button className="skipbutton">Skip</button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
