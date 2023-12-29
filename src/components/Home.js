import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
} from "../services/tmdbService";

import MovieRow from "./MovieRow";
import FeaturedMovie from "./FeaturedMovie";
import Header from "./Header";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

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

  useEffect(() => {
    const fetchPopular = async () => {
      const popular = await fetchPopularMovies();
      setPopularMovies(popular);
    };
    fetchPopular();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} sx={{ px: 2 }}>
        {topRatedMovies.length > 0 && (
          <FeaturedMovie movie={topRatedMovies[0]} />
        )}
      </Grid>
      <Grid item xs={12}>
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Popular" movies={popularMovies} />
        <MovieRow title="Top Rated" movies={topRatedMovies} />
      </Grid>
    </Grid>
  );
};

export default Home;
