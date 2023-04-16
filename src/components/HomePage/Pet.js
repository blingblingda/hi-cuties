import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Pet(props) {
  const {
    animal,
    breed,
    images,
    name,
    id,
    handleAddAnimal,
    handleRemoveAnimal,
    isFaveBefore,
  } = props;
  const [isFave, setIsFave] = useState(isFaveBefore);

  let photo = images[0];

  return (
    <>
      <Link to={`/detail/${id}`}>
        <img src={photo} alt={name} />
      </Link>
      <div>
        <h2>{name}</h2>
        <h3>{breed}</h3>
        <h3>{animal}</h3>
      </div>
      <div>
        {isFave ? (
          <button
            className="action"
            onClick={() => {
              handleRemoveAnimal(props);
              setIsFave(false);
            }}
          >
            <span className="material-icons">remove_from_queue</span>
          </button>
        ) : (
          <button
            className="action"
            onClick={() => {
              handleAddAnimal(props);
              setIsFave(true);
            }}
          >
            <span className="material-icons">add_to_queue</span>
          </button>
        )}
      </div>
    </>
  );
}
