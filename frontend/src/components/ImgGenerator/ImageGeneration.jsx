// @flow
import React, { useState } from "react";
import {
  FormControl,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import SidebarMenu from "../../SidebarMenu";
import HeaderLogo from "../../HeaderLogo";
import "./image.css";
import { saveAs } from "file-saver";
import Loader from "../loader/loader";

export function ImageGeneration() {
  const [isloader, setLoader] = useState(false);
  const [imageURL, setImageURL] = useState([]);
  const [img_name, setImgName] = useState();
  const [img_size, setImgSize] = useState();
  const [img_count, setImgcount] = useState();

  async function imageGenerator() {
    setLoader(false);
    let res = await fetch("/image-generation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img_name: img_name,
        img_size: img_size,
        img_count: img_count,
      }),
    });
    let response = res.json();
    response.then((data) => {      
      setImageURL(data.image_url);
    });
    setLoader(true);
  }

  function downloadImage(url, i) {
    saveAs(url, `${"image" - { i }.jpg}`); // Put your image url here.
  }

  return (
    <div>
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
          <div className="img-container">
            <h2 className="category-title-img">Image Generation</h2>
            <div className="img-block">
              <TextField
                id="standard-basic"
                label="Image Name"
                variant="standard"
                onChange={(e) => setImgName(e.target.value)}
              />
              <FormControl className="mt-4">
                <InputLabel id="img-size">Image Size</InputLabel>
                <Select
                  labelId="img-size"
                  id="img-size"
                  // value={"256x256"}
                  label="Image Size"
                  onChange={(e) => setImgSize(e.target.value)}
                >
                  <MenuItem value={"256x256"}>Small</MenuItem>
                  <MenuItem value={"512x512"}>Medium</MenuItem>
                  <MenuItem value={"1024x1024"}>Large</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="mt-4">
                <InputLabel id="no-img">Number of Images</InputLabel>
                <Select
                  labelId="no-img"
                  id="no-img"
                  onChange={(e) => setImgcount(e.target.value)}
                  label="Image Size"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>

              <Button
                className="gn-btn"
                onClick={() => imageGenerator()}
              >
                Generate
              </Button>
            </div>
          </div>

            {imageURL.length != 0 ? (
          <div className="img-rspnce-block">
              <>
                <Grid container spacing={2}>
                  {imageURL.map((item, i) => (
                    <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                      <div className="img-block">
                        <img src={item.url} alt="img" className="img-h" />
                        <button className="gn-btn" style={{border:"none"}} onClick={() => downloadImage(item.url, i + 1)}>
                          Download
                        </button>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </>
              </div>
            ) : ""}
          
        </Grid>
      </Grid>
    </div>
  );
}
