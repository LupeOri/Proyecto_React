import "./App.css";
import React from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import PopularMovies from "./assets/components/pages/PopularMovies";

function App() {
  return (
    <>
      <PopularMovies />
    </>
  );
}

export default App;
