import React, { useEffect, useState } from "react";
import axios from "axios";
import { getMovies } from "./ListaMovies";

function Searcher() {
  const [key, setKey] = useState("");

  const searchMovies = (e) => {
    e.preventDefault();
    getMovies(key);
  };

  return (
    <div className="form-container">
      <div className="input-div">
        <form className="searcher-form" onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="Escriba el nombre de la película..."
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
