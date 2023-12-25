import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import Movie from "./Movie";

const MovieRow = ({ title, movies }) => {
  return (
    <Box sx={{ mt: 1, p: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            container
            spacing={1}
            sx={{ display: "flex", flexWrap: "nowrap", mt: 3 }}
          >
            {movies.map((movie) => (
              <Grid item key={movie.id} xs={4}>
                <Link to={`/movie/${movie.id}`}>
                  <Movie movie={movie} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieRow;
