import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import PlayButton from "./Buttons/Play";

const StyledCard = styled(Card)({
  position: "relative",
  height: "500px",
  color: "black",
});

const StyledCardMedia = styled(CardMedia)({
  height: "100%",
  opacity: 0.5,
});

const StyledCardContent = styled(CardContent)({
  position: "absolute",
  bottom: "20px",
  left: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "40%",
});

const FeaturedMovie = ({ movie }) => {
  const imageUrl = `${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}original${movie.backdrop_path}`;

  return (
    <StyledCard>
      <StyledCardMedia image={imageUrl} title={movie.title} />
      <StyledCardContent sx={{}}>
        <Typography variant="h3">Watch {movie.title} Now</Typography>
        <Typography variant="body1">{movie.overview}</Typography>
        <PlayButton />
      </StyledCardContent>
    </StyledCard>
  );
};

export default FeaturedMovie;
