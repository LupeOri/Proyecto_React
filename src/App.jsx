import "./App.css";
import React from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import MainPage from "./assets/components/pages/MainPage";
import HeaderPage from "./assets/components/pages/HeaderPage";

function App() {
  return (
    <>
    <div className="app">
      <HeaderPage />
      <MainPage />
      </div>
    </>
  );
}

export default App;
