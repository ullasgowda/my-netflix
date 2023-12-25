import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  position: "relative",
  height: "500px",
  color: "black",
});

const StyledCardMedia = styled(CardMedia)({
  height: "100%",
  opacity: 0.5, // Gives a dimming effect
});

const StyledCardContent = styled(CardContent)({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

const FeaturedMovie = ({ title, description, imageUrl }) => {
  return (
    <StyledCard>
      <StyledCardMedia image={imageUrl} title={title} />
      <StyledCardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default FeaturedMovie;
