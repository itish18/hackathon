import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { calcDateUploaded } from "../utils/DateFunctions";

const Card = ({ id, image, title, summary, uploaded }) => {
  const nav = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        padding: "24px",
        gap: "32px",
        bgcolor: "white",
        boxShadow:
          " 0px 0px 25px 10px rgba(132, 132, 132, 0.16), inset 0px -3px 6px rgba(0, 0, 0, 0.06)",
        width: "100%",
        maxWidth: "320px",
        cursor: "pointer",
      }}
      onClick={() => nav(`/${id}`)}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <img
          src={image.url}
          alt="profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
        <Typography
          sx={{
            font: "500 20px/30px poppins,sans-serif",
            // textOverflow: "ellipsis",
            // overflow: "hidden",
            // whiteSpace: "noWrap",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            width: "312px",
            height: "80px",
            overflow: "clip",
            font: "400 16px/20px poppins,sans-serif",
          }}
        >
          {summary}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          sx={{
            color: "#666666",
            font: "italic 400 14px/17px poppins,sans-serif",
          }}
        >
          {calcDateUploaded(uploaded) > 1
            ? `uploaded ${calcDateUploaded(uploaded)} days ago`
            : "uploaded today"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
