import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./assets/components/pages/MoviesPage";
import SeriesPage from "./assets/components/pages/SeriesPage";
import HomePage from "./assets/components/pages/HomePage";
import NavPage from "./assets/components/core/NavPage";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <NavPage />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
