import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../App";
import PetList from "./PetList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

export default function HomePage() {
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
    <Container>
      <Row className="px-4 my-5">
        <Col sm={8}>
          {" "}
          <p className="fs-4">
            Welcome to our pet photo showcase website, where you can browse
            through adorable pictures of all kinds of pets! From fluffy cats to
            playful dogs, we've got it all. Each photo is accompanied by basic
            information about the pet, such as their name, breed and a short
            description of their personality. We're dedicated to showcasing the
            beauty and uniqueness of each and every pet, and we hope that our
            website will bring a smile to your face and brighten up your day. So
            come on in, take a look around, and maybe even find your new furry
            friend!
          </p>
        </Col>
        <Col sm={4}>
          <Image src="https://i.chzbgr.com/full/8194376448/h549EF8E8/do-a-birdie-roll" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
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
                onChange={(e) => {
                  setAnimal(e.target.value);
                }}
                onBlur={(e) => {
                  setAnimal(e.target.value);
                }}
                className="form-select"
                aria-label="Animal select"
              >
                <option selected />
                {ANIMALS.map((animal) => {
                  return (
                    <option value={animal} key={animal}>
                      {animal}
                    </option>
                  );
                })}
              </select>
            </label>
            {""}
            <label htmlFor="breed">
              Breed
              <select
                id="breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                onBlur={(e) => setBreed(e.target.value)}
                className="form-select w-auto"
                aria-label="Breed select"
              >
                <option selected />
                {breedOptions.map((breed) => (
                  <option value={breed} key={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </label>
            {""}
            <button type="submit" className="btn btn-outline-warning">
              Submit
            </button>
          </form>
        </Col>
        <Col xs={6} md={4}>
          {/* <NavLink to={"/favorite"}>Favorites</NavLink> */}
          <LinkContainer to="/favorite">
            <Nav.Link>
              <Button variant="success">Your Saved Pets</Button>
            </Nav.Link>
          </LinkContainer>
        </Col>
      </Row>

      <FavoritesContext.Consumer>
        {(value) => (
          <PetList
            pets={pets}
            favorites={value.favorites}
            setFavorites={value.setFavorites}
          />
        )}
      </FavoritesContext.Consumer>
    </Container>
  );
}
