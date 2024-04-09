import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <div className="section-selector">
        <Link to="/movies" className="section-link">
          <h2 className="movies-title">Movies</h2>
          <p>Descubre las películas más populares</p>
        </Link>

        <Link to="/series" className="section-link">
          <h2 className="series-title">Series</h2>
          <p>Explora las series más vistas</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
