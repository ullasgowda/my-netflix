import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Movie from "./Movie";

const ScrollableRow = styled(Grid)({
  display: "flex",
  flexWrap: "nowrap",
  overflow: "auto",
  overflowX: "scroll",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const MovieRow = ({ title, movies }) => {
  if (movies.length === 0) return <></>;

  return (
    <Box sx={{ mt: 1, p: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: "#db0000" }}>
            {title}
          </Typography>
        </Grid>
        <Grid container spacing={1}>
          <ScrollableRow container spacing={1} sx={{ m: 2 }}>
            {movies.map((movie) => (
              <Grid item key={movie.id} xs={4} sx={{ minWidth: "270px" }}>
                <Movie movie={movie} />
              </Grid>
            ))}
          </ScrollableRow>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieRow;
