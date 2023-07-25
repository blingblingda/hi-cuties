import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
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
      <HashRouter>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand>
              <i className="bi bi-flower1 display-6"></i>{" "}
              <h1 className="display-6" style={{ display: "inline-block" }}>
                Hi Cuties!
              </h1>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:pet_id" element={<Detail />} />
          <Route path="/favorite" element={<FavoritesPage />} />
        </Routes>
      </HashRouter>
    </FavoritesContext.Provider>
  );
}
