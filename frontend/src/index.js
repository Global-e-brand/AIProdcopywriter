import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import noFooterURL from "./components/json/nofooter.json"
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

let windowURL=window.location.href.substring(window.location.origin.length)

let footerShow=true;

//no footer

export function noFooter(){
  noFooterURL.map((item)=>{
    if(windowURL===item.url){
       footerShow=false;
    }
  })
}


noFooter();
root.render(
  <BrowserRouter>
    <App />   
    {footerShow?<Footer/>:footerShow=true}
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
