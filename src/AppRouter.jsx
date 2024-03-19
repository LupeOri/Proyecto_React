import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./assets/components/layout/Navigation";
import Series from "./assets/components/pages/Series";
import Home from "./assets/components/pages/Home";
import Search from "./assets/components/pages/Search";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="series/:id" element={<Series />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
