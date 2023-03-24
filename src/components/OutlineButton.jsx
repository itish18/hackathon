import { Button, Box, Typography } from "@mui/material";
import React from "react";

const OutlineButton = ({ icon, text, color, func }) => {
  return (
    <Button
      sx={{
        color: `${color ? color : "white"}`,
        border: `1px solid ${color ? color : "white"}`,
        borderRadius: "10px",
        padding: "6px 30px ",
      }}
      onClick={func}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        {icon}
        <Typography
          sx={{
            font: "500 16px/28px poppins,sans-serif",
            textTransform: "none",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Button>
  );
};

export default OutlineButton;
