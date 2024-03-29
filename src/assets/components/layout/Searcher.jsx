import React, { useEffect, useState } from "react";
import axios from "axios";

function Searcher() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "bbaa7afeb202fbf5a15e8b9f2c114a45";
  const IMAGE_PAT = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [key, setkey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading movies" });

  const getMovies = async (key) => {
    const type = key ? "search" : "discover";
    const response = await axios.get(`${API_URL}/${type}/search`, {
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
    setMovies(dataMovies);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    if (key.trim() !== "") {
      getMovies(key);
    }
  };

  return (
    <div className="form-container">
      <div className="input-div">
        <form className="searcher-form" onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="Escriba el nombre de la pelicula..."
            value={key}
            onChange={(e) => setkey(e.target.value)}
          />
          <button type="submit" className="btn-search">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searcher;
