import React from "react";

function Movies({ movies }) {
  return (
    <div>
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="box-movie">
            <img src={movie.img} alt="" />
            <h4 className="movie-title">{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
