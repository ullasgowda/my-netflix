import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

import { fetchTrendingMovies } from "../services/tmdbService";

import FeaturedMovie from "./FeaturedMovie";
import MovieRow from "./MovieRow";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const trending = await fetchTrendingMovies();
      setTrendingMovies(trending);
    };

    loadMovies();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FeaturedMovie title="Movie Titld" description="One two three" />
      </Grid>
      <Grid item xs={12}>
        <MovieRow title="Trending Now" movies={trendingMovies} />
        {/* <MovieRow title="Trendin2g" movies={movies} /> */}
      </Grid>
    </Grid>
  );
};

export default Home;
