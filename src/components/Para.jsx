import { Typography } from "@mui/material";

const Para = ({ text }) => {
  return (
    <Typography sx={{ font: "500 17px/25px poppins,sans-serif" }}>
      {text}
    </Typography>
  );
};

export default Para;
