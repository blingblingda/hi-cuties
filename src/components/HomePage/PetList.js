import React from "react";
import Pet from "./Pet";

export default function PetList(props) {
  const { pets } = props;
  //   const { animal, breed, city, description, id, images, name, state } = pets;
  return (
    <div>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  );
}
