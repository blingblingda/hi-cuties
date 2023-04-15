import React from "react";
import Detail from "../DetailPage";

export default function Pet(props) {
  const { animal, breed, images, name } = props;

  let photo = images[0];

  return (
    <div>
      <img src={photo} alt={name} />
      <div>
        <h2>{name}</h2>
        <h3>{breed}</h3>
        <h3>{animal}</h3>
      </div>
    </div>
  );
}
