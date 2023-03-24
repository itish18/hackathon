import { Button } from "@mui/material";

const FilledButton = ({ text, func, fontWeight, type }) => {
  return (
    <Button
      onClick={func}
      type={type}
      sx={{
        padding: "12px 18px",
        backgroundColor: "#44924C",
        borderRadius: "10px",
        boxShadow:
          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);",
        color: "white",
        textTransform: "none",
        font: `${fontWeight} 16px/28px poppins,sans-serif`,
        "&:hover": {
          backgroundColor: "#44924C",
        },
        cursor: "pointer",
      }}
    >
      {text}
    </Button>
  );
};

export default FilledButton;
