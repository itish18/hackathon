import { Box } from "@mui/material";

const TextArea = ({ type, label, value, holder, name, min, max, func }) => {
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
      <textarea
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
          resize: "none",
          height: "10rem",
        }}
      />
      <span
        style={{
          font: "400 14px/16.94px poppins,sans-serif",
          textAlign: "right",
          color: "#858585",
          width: "100%",
        }}
      >
        {value ? value.length.toLocaleString() : 0} / 3,000 characters
      </span>
    </Box>
  );
};

export default TextArea;
