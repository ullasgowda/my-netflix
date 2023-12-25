import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,videos`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

const fetchSimilarMovies = async (movieId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    return null;
  }
};

export { fetchTrendingMovies, fetchMovieDetails, fetchSimilarMovies };
