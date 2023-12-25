import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)({
  // Add your styles here
  backgroundColor: "#000000",
  color: "#db0000",
});

const Header = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">Netflix Clone</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
