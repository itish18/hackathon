import { Box } from "@mui/material";

import Bulb from "../../assests/images/Bulb.png";

const Right = () => {
  return (
    <Box>
      <img
        src={Bulb}
        alt="bulb"
        style={{ maxWidth: "200px", zIndex: "2", position: "relative" }}
      />
    </Box>
  );
};

export default Right;
