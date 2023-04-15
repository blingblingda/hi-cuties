import React from "react";
import { Link } from "react-router-dom";

export default function Pet(props) {
  const { animal, breed, images, name, id } = props;

  let photo = images[0];

  return (
    <Link to={`/detail/${id}`}>
      <img src={photo} alt={name} />
      <div>
        <h2>{name}</h2>
        <h3>{breed}</h3>
        <h3>{animal}</h3>
      </div>
    </Link>
  );
}
