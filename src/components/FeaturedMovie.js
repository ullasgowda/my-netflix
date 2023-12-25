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

const FeaturedMovie = ({ movie }) => {
  const imageUrl = `${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}original${movie.backdrop_path}`;

  return (
    <StyledCard>
      <StyledCardMedia image={imageUrl} title={movie.title} />
      <StyledCardContent
        sx={{
          color: "#ffffff",
          mb: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">{movie.title}</Typography>
        <Typography variant="caption">Rated : {movie.vote_average}</Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default FeaturedMovie;
