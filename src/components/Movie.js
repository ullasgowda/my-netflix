import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const imageUrl = `${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}w500${movie.poster_path}`;

  return (
    <Card sx={{ mx: 2, minWidth: "250px" }}>
      <CardActionArea>
        <CardMedia component={"img"} image={imageUrl} alt={movie.title} />
      </CardActionArea>
      <CardContent sx={{ height: "40px" }}>
        <Typography variant="legend" sx={{ height: "200px" }}>
          {movie.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Movie;
