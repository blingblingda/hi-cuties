import React from "react";
import { useState, useEffect } from "react";
import PetList from "./PetList";

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

export default function Search() {
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState([]);
  const [pets, setPets] = useState([]);
  const [breedOptions, setBreedOptions] = useState([]);

  useEffect(() => {
    fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}`)
      .then((res) => res.json())
      // .then((res) => console.log(res.pets))
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

  const handleSubmit = () => {
    fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}`)
      .then((res) => res.json())
      .then((res) => setPets(res.pets))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
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
      <PetList pets={pets} />
    </div>
  );
}
