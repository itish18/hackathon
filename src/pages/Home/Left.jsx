import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Heading from "../../components/Heading";
import Para from "../../components/Para";
import FilledButton from "../../components/FilledButton";

const Left = () => {
  const nav = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "34px",
        color: "white",
        zIndex: "2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "13px",
          flexDirection: "column",
          maxWidth: "792px",
        }}
      >
        <Heading heading="Hackathon Submissions" />
        <Para text="Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. " />
      </Box>
      <FilledButton
        text="Upload Submission"
        func={() => nav("/new")}
        fontWeight="600"
      />
    </Box>
  );
};

export default Left;
