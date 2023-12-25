import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "#000000",
  color: "#db0000",
});

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          NETFLIX
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
