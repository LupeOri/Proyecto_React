import React, { useEffect, useState } from "react";
import axios from "axios";
import { getMovies } from "./ListaMovies";

function Searcher() {
  const [movies, setMovies] = useState([]);
  const [key, setKey] = useState("");

  const searchMovies = (e) => {
    e.preventDefault();
    if (key.trim() !== "") {
      getMovies(key)
        .then((dataMovies) => {
          setMovies(dataMovies);
        })
        .catch((error) => {
          console.error(error);
        });
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
            onChange={(e) => setKey(e.target.value)}
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
