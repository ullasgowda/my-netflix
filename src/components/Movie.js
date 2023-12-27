import React from "react";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const imageUrl = `${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}w500${movie.poster_path}`;

  return (
    <Card sx={{ minWidth: "270px", maxHeight: "500px" }}>
      <Link to={`/movie/${movie.id}`}>
        <CardActionArea>
          <CardMedia
            component={"img"}
            image={imageUrl}
            alt={movie.title}
            sx={{ minHeight: "400px" }}
          />
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default Movie;
