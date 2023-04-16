import React, { useState } from "react";
import Pet from "./Pet";

export default function PetList(props) {
  const [faveAnimals, setFaveAnimals] = useState([]);
  const { pets } = props;
  console.log(pets);

  const handleAddAnimal = (animal) => {
    if (!faveAnimals.map((element) => element.id).includes(animal.id)) {
      pets
        .filter((element) => element.id === animal.id)
        .map((element) => setFaveAnimals([...faveAnimals, element]));
    }
  };

  const handleRemoveAnimal = (animal) => {
    if (faveAnimals.map((element) => element.id).includes(animal.id)) {
      const newFaveAnimals = faveAnimals.filter(
        (element) => element.id !== animal.id
      );
      setFaveAnimals(newFaveAnimals);
    }
  };

  console.log(faveAnimals);

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
          handleAddAnimal={handleAddAnimal}
          handleRemoveAnimal={handleRemoveAnimal}
        />
      ))}
    </div>
  );
}
