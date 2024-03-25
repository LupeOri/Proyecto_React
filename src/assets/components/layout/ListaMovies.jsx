import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";

function ListaMovies() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "bbaa7afeb202fbf5a15e8b9f2c114a45";
  const IMAGE_PAT = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [key, setkey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading movies" });
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);

  const getMovies = async (key) => {
    const type = key ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: key,
      },
    });

    setMovies(results);
    setMovie(results[0]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="container">
        {movies.map((movie) => (
          <div key={movie.id} className="columna">
            <img
              src={`${URL_IMAGE + movie.poster_path}`}
              alt=""
              height={400}
              width="100%"
            />
            <h4 className="movie-title">{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaMovies;
