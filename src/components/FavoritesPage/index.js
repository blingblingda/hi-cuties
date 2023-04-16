import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../App";

export default function FavoritesPage() {
  return (
    <FavoritesContext.Consumer>
      {(value) =>
        value.favorites.map((fav) => {
          return (
            <>
              <Link to={`/detail/${fav.id}`}>
                <img src={fav.images[0]} alt={fav.name} />
              </Link>
              <div>
                <h2>{fav.name}</h2>
                <h3>{fav.breed}</h3>
                <h3>{fav.animal}</h3>
              </div>
            </>
          );
        })
      }
    </FavoritesContext.Consumer>
  );
}
