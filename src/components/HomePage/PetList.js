import React from "react";
import Pet from "./Pet";
import { Row, Col } from "react-bootstrap";

export default function PetList(props) {
  const { pets, favorites, setFavorites } = props;

  const handleAddAnimal = (animal) => {
    if (!favorites.map((element) => element.id).includes(animal.id)) {
      pets
        .filter((element) => element.id === animal.id)
        .map((element) => setFavorites([...favorites, element]));
    }
  };

  const handleRemoveAnimal = (animal) => {
    if (favorites.map((element) => element.id).includes(animal.id)) {
      const newFaveAnimals = favorites.filter(
        (element) => element.id !== animal.id
      );
      setFavorites(newFaveAnimals);
    }
  };

  return (
    <Row className="px-4 my-5">
      {!pets.length ? (
        <h1 className="text-success">No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Col>
            <Pet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              breed={pet.breed}
              animal={pet.animal}
              images={pet.images}
              isFaveBefore={favorites
                .map((favorite) => favorite.id)
                .includes(pet.id)}
              handleAddAnimal={handleAddAnimal}
              handleRemoveAnimal={handleRemoveAnimal}
            />
          </Col>
        ))
      )}
    </Row>
  );
}
