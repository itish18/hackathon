import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Modal } from "@mui/material";

const DeleteModal = ({ open, setOpen, onDeleteEntry, hackathon }) => {
  const nav = useNavigate();
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "absolute",
          padding: "1em 1.6em",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          zIndex: "1",
          borderRadius: "0.5rem",
        }}
      >
        <Typography sx={{ font: "500 20px/20px poppins,sans-serif" }}>
          Delete this hackathon?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            mt: "2rem",
            gap: "1rem",
          }}
        >
          <Button
            sx={{
              color: "white",
              bgcolor: "red",
              textTransform: "none",
              padding: "5px 15px",
              "&:hover": {
                bgcolor: "red",
              },
            }}
            onClick={() => {
              onDeleteEntry(hackathon, "delete");
              nav("/");
            }}
          >
            Delete
          </Button>
          <Button
            sx={{
              color: "red",
              border: "1px solid red",
              textTransform: "none",
              padding: "5px 15px",
            }}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
