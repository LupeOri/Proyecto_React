import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";

export const getMovies = async (key) => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "bbaa7afeb202fbf5a15e8b9f2c114a45";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const type = key ? "search" : "discover";
  const response = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: key,
    },
  });
  const dataMovies = response.data.results.map((movie) => ({
    id: movie.id,
    img: `${URL_IMAGE + movie.poster_path}`,
    title: movie.title,
  }));
  return dataMovies;
};

function ListaMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((dataMovies) => {
      setMovies(dataMovies);
    });
  }, []);

  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}

export default ListaMovies;
