import { Box } from "@mui/material";

const Inputs = ({ type, label, value, holder, name, min, max, func }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "80%",
        gap: "8px",
      }}
    >
      <label
        htmlFor={label}
        style={{ font: "400 17px/25.5px poppins,sans-serif", color: "#222222" }}
      >
        {label}
      </label>
      <input
        id={label}
        type={type ? type : "text"}
        min={min}
        max={max}
        name={name}
        value={value}
        placeholder={holder}
        onChange={(e) => func(e)}
        required
        style={{
          font: "400 16px/19.36px inter,sans-serif",
          padding: "16px",
          alignSelf: "stretch",
          border: "1px solid  #CCCCCC",
          borderRadius: "8px",
          outline: "none",
        }}
      />
    </Box>
  );
};

export default Inputs;
