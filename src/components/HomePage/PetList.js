import React from "react";
import Pet from "./Pet";

export default function PetList(props) {
  const { pets } = props;

  return (
    <div>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          id={pet.id}
          name={pet.name}
          breed={pet.breed}
          animal={pet.animal}
          images={pet.images}
        />
      ))}
    </div>
  );
}
