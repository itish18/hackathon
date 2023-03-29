import { Typography } from "@mui/material";

const Heading = ({ heading }) => {
  return (
    <Typography
      sx={{
        font: "600 42px/63px poppins,sans-serif",
      }}
    >
      {heading}
    </Typography>
  );
};

export default Heading;
