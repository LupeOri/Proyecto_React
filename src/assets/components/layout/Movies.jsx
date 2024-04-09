import React, { useState, useEffect } from "react";

function Movies({ movie }) {
  const initialLikes = parseInt(localStorage.getItem(`likes-${movie.id}`)) || 0;
  const initialDislikes =
    parseInt(localStorage.getItem(`dislikes-${movie.id}`)) || 0;

  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  useEffect(() => {
    localStorage.setItem(`likes-${movie.id}`, likes.toString());
    localStorage.setItem(`dislikes-${movie.id}`, dislikes.toString());
  }, [likes, dislikes, movie.id]);

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
    <div className="box-movie">
      <img src={movie.img} alt={movie.title} />
      <h3 className="movie-title">{movie.title}</h3>
      <div>
        <button className="like" onClick={handleLikeClick}>
          Like &#128077; {likes}
        </button>
        <button className="dislike" onClick={handleDislikeClick}>
          Dislike &#128078;{dislikes}
        </button>
      </div>
    </div>
  );
}

export default Movies;
