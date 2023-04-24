import { Grid } from "@mui/material";
import React, { useState } from "react";
import HeaderLogo from "../../HeaderLogo";
import SidebarMenu from "../../SidebarMenu";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { Navigate, redirect } from "react-router-dom";
import Form from "../Form/form";
import AlertMessage from "./AlertMessage";

function ImageObjectDetection() {
  const [selectImg, setSelectImg] = useState();
  const [predictions, setPrediction] = useState([]);
  const [alertBox, setAlertBox] = useState(false);

  const handleClose = () => {
    setAlertBox(false);
  };

  const redirectTo = (inputone) => {
    
    <Navigate replace to={`/productdescription?inputOne=${inputone}`} />;
  };

  const detectObjectsOnImage = async (image) => {
    const model = await cocoSsd.load({});
    const prediction = await model.detect(image, 1);
    setPrediction(prediction);
    console.log("prediction", prediction);
  };

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rs(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };

  const selectImagePicker = async (e) => {
    const file = e.target.files[0];
    const imgData = await readImage(file);
    setSelectImg(imgData);

    const imageElement = document.createElement("img");
    imageElement.src = imgData;

    imageElement.onload = async () => {
      await detectObjectsOnImage(imageElement);
    };
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <div className="main-division">
          {/* siderbar */}
          <div className="logo-panel">
            <div className="logo-wrapper">
              <HeaderLogo />
            </div>
            <SidebarMenu />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9} xl={9} spacing={2}>
        <div className="container">
          <div className="img-wrapper">
            <img src={selectImg} alt="img" />
          </div>

          <div className="input-select">
            <input
              className="img-wrapper"
              type="file"
              accept="image/*"
              onChange={(e) => selectImagePicker(e)}
            />
          </div>

          <div className="">
            {predictions.length != 0
              ? predictions.map((item) => (
                  <>
                    {/* {item.class} {" - "} */}
                    {/* {(item.score * 100).toFixed(0) + " %"} <br /> */}
                    {item.class !== null ? (
                      <AlertMessage
                        open={true}
                        handleClose={()=>handleClose}
                        imagename={item.class}
                        redirectTo={redirectTo}
                      />
                    ) : (
                      ""
                    )}

                    {/* {redirectTo(item.class)} */}
                  </>
                ))
              : "Preparing..."}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default ImageObjectDetection;
