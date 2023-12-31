import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PlayButton from "./Buttons/Play";
import { fetchMovieDetails, fetchSimilarMovies } from "../services/tmdbService";

import MovieRow from "./MovieRow";

const StyledCard = styled(Card)({
  position: "relative",
  height: "500px",
  color: "black",
});

const StyledCardMedia = styled(CardMedia)({
  height: "100%",
  opacity: 0.8,
});

const StyledCardContent = styled(CardContent)({
  position: "absolute",
  bottom: "20px",
  left: "20px",
  mb: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "40%",
});

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      const movieDetails = await fetchMovieDetails(id);
      setMovie(movieDetails);
      setLoading(false);
    };

    getMovieDetails();
  }, [id]);

  useEffect(() => {
    const getSimilarMovies = async () => {
      const similarMovies = await fetchSimilarMovies(id);
      setSimilarMovies(similarMovies);
    };
    getSimilarMovies();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;

  if (!movie) return <div>Movie not found</div>;

  return (
    <Box sx={{ px: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledCard>
            <StyledCardMedia
              sx={{ height: 500 }}
              image={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}original${movie.backdrop_path}`}
              title={movie.title}
            />
            <StyledCardContent>
              <Typography variant="h4">{movie.title}</Typography>
              <PlayButton />
            </StyledCardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sx={{ color: "white" }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography gutterBottom variant="subtitle1">
                {movie.release_date.split("-")[0]} |{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </Typography>
              <Typography variant="body1">
                Rating: {movie.vote_average}/10
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Overview
              </Typography>
              <Typography>{movie.overview}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Cast
              </Typography>
              <Grid container spacing={2}>
                {movie.credits.cast.slice(0, 5).map((actor) => (
                  <Grid
                    item
                    key={actor.cast_id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}w500${actor.profile_path}`}
                    />
                    <Typography variant="body2">{actor.name}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              {movie.videos.results.length > 0 && (
                <iframe
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                  title="YouTube video player"
                ></iframe>
              )}
            </Grid>
            <Grid item xs={12}>
              {similarMovies.length > 0 && (
                <MovieRow title="Similar Movies" movies={similarMovies} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetail;
