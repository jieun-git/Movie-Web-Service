import React, { useState, useEffect } from "react";

import MovieList from "../components/MovieList";

function HighRating() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
    ); //c->s syn
    const json = await response.json();
    console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return <MovieList loading={loading} movies={movies} />;
}

export default HighRating;
