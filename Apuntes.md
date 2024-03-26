import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import Movies from "./Movies";

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
await axios.get(`${API_URL}/${type}/movie`).then((res) => { const dataMovies = res.data.results.map((movie)=> ({img: `${URL_IMAGE + movie.poster_path}`, titulo: movie.title} )) {
params: {
api_key: API_KEY,
query: key,
},
});

    setMovies(dataMovies);
    setMovie(dataMovies[0]);

};

useEffect(() => {
getMovies();
}, []);

return (

<div>
<Movies/>
</div>
))}
</div>
</div>
);
}

export default ListaMovies;
