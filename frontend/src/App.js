import "./App.css";
import Grid from "@mui/material/Grid";
import HeaderLogo from "./HeaderLogo";
import ButtonMain from "./ButtonMain";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories/Categories";
import Dummy from "./components/Form/Dummy";
import { fulllogo, sidebckgnd } from "./assets";
import { robot } from "./assets";
import Footer from "./Footer";
import { Button } from "@mui/material";

function instructions() {
  alert('You clicked Instructions!');
}

function skip() {
  alert('You clicked Skip!');
}

function App() {
  return (
    <>
      <div className="App">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
          <img
              src={robot}
              alt="AI ProdCopywriter robot mascot"
              style={{ width: "75%", height: "95%", marginTop: "4.5%", marginLeft: "17%"}}
            />
          </Grid>
          <Grid item xs={8}>
            <div>
              <img
                src={fulllogo}
                alt="AI ProdCopywriter logo"
                style={{ width: "80%", height: "80%", marginTop: "12%", marginLeft: "-5%", marginBottom: "7%"}}
              />
            </div>

            <div>
              <h2
                style={{ marginLeft: "1%", fontSize: "30px", fontWeight: "bold"}}
              >
                Welcome to AI ProdCopywriter!
              </h2>
            </div>

            <div>
              <p
                style={{ marginLeft: "5%", fontSize: "18px" }}
              >
                Create the perfect description for your needs!
              </p>
            </div>
            
            <div>
              <p
                style={{ marginRight: "20%", marginLeft: "-5%", fontSize: "18px"}}
              >
                Information about the product Information about the product
                Information about the product Information about the product
                Information about the product Information about the product 
                Information about the product Information about the product
              </p>
            </div>

            <Grid container spacing={4} columns={16}>
              <Grid item xs={6}>
                <button 
                  onClick={instructions}
                  className="infobutton"
                >
                  Instructions
                </button>
              </Grid>

              <Grid item xs={6}>
                <button 
                  onClick={skip}
                  className="skipbutton"
                >
                  Skip
                </button>
              </Grid>
            </Grid>

            

            
            
              
          </Grid>
        </Grid>

        <Footer/>
      </div>
    </>
  );
}

export default App;
