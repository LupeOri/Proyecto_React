import React, { useState, useEffect } from "react";

function CardSeries({ serie }) {
  const initialLikes =
    parseInt(localStorage.getItem(`likes-${serie.name}`)) || 0;
  const initialDislikes =
    parseInt(localStorage.getItem(`dislikes-${serie.name}`)) || 0;

  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  useEffect(() => {
    localStorage.setItem(`likes-${serie.name}`, likes.toString());
    localStorage.setItem(`dislikes-${serie.name}`, dislikes.toString());
  }, [likes, dislikes, serie.name]);

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
    <div className="div-cards">
      <img className="cards" src={serie.image} alt={serie.name} />
      <h3>{serie.name}</h3>
      <div>
        <button
          className={`like ${likeActive ? "active" : ""}`}
          onClick={handleLikeClick}
        >
          Like &#128077; {likes}
        </button>
        <button className="dislike" onClick={handleDislikeClick}>
          Dislike &#128078; {dislikes}
        </button>
      </div>
    </div>
  );
}

export default CardSeries;
