import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
} from "../services/tmdbService";

import MovieRow from "./MovieRow";
import FeaturedMovie from "./FeaturedMovie";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await fetchTrendingMovies();
      setTrendingMovies(trending);
    };

    fetchTrending();
  }, []);

  useEffect(() => {
    const fetchTopRated = async () => {
      const topRated = await fetchTopRatedMovies();
      setTopRatedMovies(topRated);
    };
    fetchTopRated();
  }, []);

  return (
    <Grid container spacing={2} sx={{ px: 2 }}>
      <Grid item xs={12}>
        {topRatedMovies.length > 0 && (
          <FeaturedMovie movie={topRatedMovies[0]} />
        )}
      </Grid>
      <Grid item xs={12}>
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Top Rated" movies={topRatedMovies} />
      </Grid>
    </Grid>
  );
};

export default Home;
