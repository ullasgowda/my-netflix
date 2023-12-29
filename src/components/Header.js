import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import ProfileRed from "../assets/profile_blue.png";

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
    <AppBar position="static" sx={{ opacity: 0.9 }}>
      <StyledToolbar>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Typography
              variant="h5"
              sx={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              NETFLIX
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ display: "flex", justifyContent: "end", cursor: "pointer" }}
          >
            <img src={ProfileRed} height={35} width={35}></img>
          </Grid>
        </Grid>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
