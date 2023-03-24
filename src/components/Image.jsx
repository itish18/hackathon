import { Box, Typography } from "@mui/material";
import { RiImageAddFill } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";

const Image = ({ label, image, func }) => {
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
      <Typography
        sx={{ font: "400 16px/19.36px poppins,sans-serif", color: "#858585" }}
      >
        Minimum resolution: 360px X 360px
      </Typography>
      {!image?.url ? (
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#F5F5F5",
            width: "100%",
            border: "2px dashed #CCCCCC",
            borderRadius: "16px",
            zIndex: "0",
            cursor: "pointer",
          }}
        >
          <input
            id={label}
            type="file"
            accept="image/*"
            name="image"
            onChange={(e) => func(e.target.files[0])}
            required
            style={{
              opacity: 0,
              cursor: "pointer",
              width: "100%",
              height: "82px",
              zIndex: "1",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              zIndex: "-1",
            }}
          >
            <RiImageAddFill color="lightGrey" size="38px" />
          </span>
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: "#F8F9FD",
            borderRadius: "16px",
            padding: "17px 16px",
            display: "flex",
            width: "97%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src={image?.url}
              alt="profile"
              style={{
                objectFit: "cover",
                width: "48px",
                height: "48px",
                borderRadius: "4px",
              }}
            />
            <Typography
              sx={{
                font: "400 16px/19.36px poppins,sans-serif",
                color: "#333333",
              }}
            >
              {image?.imageName}
            </Typography>
          </Box>
          <Box sx={{ position: "relative", zIndex: "1" }}>
            <input
              id={label}
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => func(e.target.files[0])}
              style={{
                opacity: 0,
                width: "8rem",
                height: "2.5rem",
                border: "1px solid black",
                cursor: "pointer",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "25%",
                left: "10%",
                color: "#858585",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.8em",
                zIndex: "-1",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  font: "600 14px/16.94px poppins,sans-serif",
                  cursor: "pointer",
                }}
              >
                Reupload
              </Typography>
              <FaCloudUploadAlt color="#858585" size="20px" />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Image;
