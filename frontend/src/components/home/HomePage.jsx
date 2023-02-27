// import "./App.css";
import Grid from "@mui/material/Grid";
import { fulllogo, sidebckgnd } from "../../assets";
import { robot } from "../../assets";
import Footer from "../../Footer";

function instructions() {
  alert("You clicked Instructions!");
}

function skip() {
  alert("You clicked Skip!");
}

function HomePage() {
  return (
    <Grid container spacing={2} columns={16}>
      {console.log("Homepage")}
      <Grid item xs={8}>
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
      <Grid item xs={8}>
        <div>
          <img
            src={fulllogo}
            alt="AI ProdCopywriter logo"
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
          >
            Welcome to AI ProdCopywriter!
          </h2>
        </div>

        <div>
          <p style={{ marginLeft: "5%", fontSize: "18px" }}>
            Create the perfect description for your needs!
          </p>
        </div>

        <div>
          <p
            style={{
              marginRight: "20%",
              marginLeft: "-5%",
              fontSize: "18px",
            }}
          >
            AIProdCopyWriter is a revolutionary AI app that helps to generate
            high-quality, automatic text content in just a few clicks. This
            innovative tool can be used to quickly and easily create product
            descriptions,Ad copy, blog posts, press releases and more. With its
            intuitive interface and powerful features, this app will be your
            go-to for all writing needs!
          </p>
        </div>

        <Grid container spacing={4} columns={16}>
          <Grid item xs={6}>
            <button onClick={instructions} className="infobutton">
              Instructions
            </button>
          </Grid>

          <Grid item xs={6}>
            <button onClick={skip} className="skipbutton">
              Skip
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
