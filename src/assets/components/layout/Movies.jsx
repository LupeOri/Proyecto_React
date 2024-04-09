import React, { useState, useEffect } from "react";

function Movies({ movies }) {
  const initialLikes =
    parseInt(localStorage.getItem(`likes-${movies.name}`)) || 0;
  const initialDislikes =
    parseInt(localStorage.getItem(`dislikes-${movies.name}`)) || 0;

  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  useEffect(() => {
    localStorage.setItem(`likes-${movies.name}`, likes.toString());
    localStorage.setItem(`dislikes-${movies.name}`, dislikes.toString());
  }, [likes, dislikes, movies.name]);

  const handleLikeClick = () => {
    if (likeActive !== false) {
      setLikes(likes + 1);
      setDislikeActive(false);
    } else {
      setLikeActive(true);
    }
  };

  const handleDislikeClick = () => {
    if (dislikeActive !== false) {
      setDislikes(dislikes + 1);
      setLikeActive(false);
    } else {
      setDislikeActive(true);
    }
  };
  return (
    <div>
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="box-movie">
            <img src={movie.img} alt="" />
            <h3 className="movie-title">{movie.title}</h3>
            <div>
              <button className="like" onClick={handleLikeClick}>Like {likes}</button>
              <button className="dislike" onClick={handleDislikeClick}>Dislike {dislikes}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
