import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Detail from "../DetailPage";
import FavoritesPage from "../FavoritesPage";
import NotFoundPage from "../NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

export const FavoritesContext = React.createContext({
  favorites: [],
  setFavorites: () => {},
});

export default function App() {
  const [favorites, setFavorites] = React.useState([]);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      <BrowserRouter>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <i className="bi bi-flower1"></i> Hi Cuties!
            </Navbar.Brand>
          </Container>
        </Navbar>
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
