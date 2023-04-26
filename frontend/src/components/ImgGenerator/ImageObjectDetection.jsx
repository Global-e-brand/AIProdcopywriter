import React, { useEffect, useState } from "react";
import {
  Grid,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Pagination,
} from "@mui/material";
import HeaderLogo from "../../HeaderLogo";
import SidebarMenu from "../../SidebarMenu";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import AlertMessage from "./AlertMessage";

function ImageObjectDetection() {
  const [selectImg, setSelectImg] = useState();
  const [images, setImages] = useState([]);
  const [redirectImgName, setRedirectImgName] = useState("");
  const [alertBox, setAlertBox] = useState(false);

  const handleClose = () => {
    setAlertBox(false);
  };

  const imageDetect = async (imageDetect) => {
    let res = await fetch("/image/detection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usr_img: imageDetect,
      }),
    });
    let response = res.json();
    response.then((data) => {
      setImages(data.images);
    });
  };

  const detectObjectsOnImage = async (image) => {
    const model = await cocoSsd.load({});
    const prediction = await model.detect(image, 1);
    let imageName = prediction[0].class;
    return imageName;
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
      let detectedImg = await detectObjectsOnImage(imageElement);
      imageDetect(detectedImg);
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
      <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
        <h2 className="category-title-img">
          Image Detection and Content Generation
        </h2>
        <Grid container className="img-container">
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <div className="img-block">
              <img src={selectImg} alt="img" />
            </div>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <input
              className="img-wrapper"
              type="file"
              accept="image/*"
              onChange={(e) => selectImagePicker(e)}
            />
          </Grid>
        </Grid>

        {images.length != 0 ? (
          <div className="img-container">
            <TableContainer>
              <Table size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <strong>No</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Suggestion Title</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Content</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {images.map((row, key) => (
                    <TableRow key={row.name}>
                      <TableCell align="center">{key + 1}</TableCell>
                      <TableCell align="left">{row.img_title}</TableCell>
                      <TableCell align="center">
                        <Button
                          className="gn-btn"
                          onClick={() => {
                            setAlertBox(true);
                            setRedirectImgName(row.img_title);
                          }}
                        >
                          Generate
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          ""
        )}
      </Grid>

      {alertBox ? (
        <AlertMessage
          open={alertBox}
          handleClose={handleClose}
          imagename={redirectImgName}
        />
      ) : (
        ""
      )}
    </Grid>
  );
}

export default ImageObjectDetection;
