import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Detail from "../DetailPage";
import FavoritesPage from "../FavoritesPage";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Hi Cuties!</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:pet_id" element={<Detail />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
