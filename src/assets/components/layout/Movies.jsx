import React, { useState } from "react";

function Movies({ movies }) {
  const [likes, setLikes] = useState(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes"));
    return storedLikes || {};
  });

  const handleLike = (movieId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [movieId]: (prevLikes[movieId] || 0) + 1,
    }));
  };

  const handleUnlike = (movieId) => {
    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes };
      if (updatedLikes[movieId] && updatedLikes[movieId] > 0) {
        updatedLikes[movieId] -= 1;
      }
      return updatedLikes;
    });
  };

  const saveLikesToLocalStorage = () => {
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  // Almacenar los likes en el localStorage cada vez que cambian
  // Esto garantiza que los likes persistan incluso si se actualiza la página
  React.useEffect(() => {
    saveLikesToLocalStorage();
  }, [likes]);

  return (
    <div>
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="box-movie">
            <img src={movie.img} alt="" />
            <h4 className="movie-title">{movie.title}</h4>
            <div>
              <button onClick={() => handleLike(movie.id)}>Me gusta</button>
              <button onClick={() => handleUnlike(movie.id)}>
                No me gusta
              </button>
              <p>{`Esta película tiene ${likes[movie.id] || 0} me gusta`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
