import React from "react";
import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["dog", "cat", "bird"];
// const BREEDS = [];

export default function Search() {
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState([]);
  const [pets, setPets] = useState([]);
  const [breedOptions, setBreedOptions] = useState([]);

  useEffect(() => {
    fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}`)
      .then((res) => res.json())
      .then((res) => setPets(res.pets))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    animal &&
      fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`)
        .then((res) => res.json())
        // .then((res) => console.log(res.breeds))
        .then((res) => setBreedOptions(res.breeds))
        .catch((error) => console.log(error));
  }, [animal]);

  return (
    <div>
      <form>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breedOptions.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
}
