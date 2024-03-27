import "./App.css";
import React from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/pages/Home";

function App() {
  return (
    <>
      <div className="app">
        <Home />
      </div>
    </>
  );
}

export default App;
