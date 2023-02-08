import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ClassIcon from "@mui/icons-material/Class";
import "./App.css";

function ButtonMain() {
  return (
    <div className="buttons-panel">
      {" "}
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Button color="secondary" size="medium" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button color="secondary" size="medium" startIcon={<WidgetsIcon />}>
          Popular Blogs
        </Button>
        <Button color="secondary" size="medium" startIcon={<ClassIcon />}>
          Saved Blogs
        </Button>
      </Stack>
    </div>
  );
}

export default ButtonMain;
