import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Detail from "../DetailPage";
import FavoritesPage from "../FavoritesPage";
import NotFoundPage from "../NotFoundPage";

export const FavoritesContext = React.createContext({
  favorites: [],
  setFavorites: () => {},
});

export default function App() {
  const [favorites, setFavorites] = React.useState([]);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      <BrowserRouter>
        <header>
          <Link to="/">Hi Cuties!</Link>
        </header>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:pet_id" element={<Detail />} />
          <Route path="/favorite" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesContext.Provider>
  );
}
