import { Typography } from "@mui/material";
import React from "react";

const SubHeading = ({ heading }) => {
  return (
    <Typography
      sx={{ font: "500 29px/43.5px poppins,sans-serif", color: "#333333" }}
    >
      {heading}
    </Typography>
  );
};

export default SubHeading;
