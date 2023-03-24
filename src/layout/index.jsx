import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Logo from "../assests/images/AI Planet Logo.png";

const Layout = (props) => {
  const nav = useNavigate();
  return (
    <>
      <Box sx={{ padding: "12px 142px" }}>
        <img
          src={Logo}
          alt="logo"
          onClick={() => nav("/")}
          style={{ cursor: "pointer" }}
        />
      </Box>
      {props.children}
    </>
  );
};

export default Layout;
