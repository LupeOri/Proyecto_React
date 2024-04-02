import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./assets/components/pages/MoviesPage";
import SeriesPage from "./assets/components/pages/SeriesPage";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
