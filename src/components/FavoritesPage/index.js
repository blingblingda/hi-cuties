import React from "react";
import { FavoritesContext } from "../App";

export default function FavoritesPage() {
  return (
    <FavoritesContext.Consumer>
      {(value) =>
        value.favorites.map((fav) => {
          return <div>Favorites {fav.name}</div>;
        })
      }
    </FavoritesContext.Consumer>
  );
}
