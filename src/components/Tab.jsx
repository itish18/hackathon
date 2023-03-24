import { Box, Typography } from "@mui/material";

const Tab = ({ text, selected, value, onSelect }) => {
  const handleClick = () => {
    onSelect(value);
  };
  return (
    <Box
      sx={{
        cursor: "pointer",
        borderBottom:
          selected === value ? "3px solid green" : "3px solid white",
        padding: "4px 24px",
      }}
      onClick={handleClick}
    >
      <Typography
        sx={{
          color: "#333333",
          font: "500 17px/25.5px poppins,sans-serif",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Tab;
