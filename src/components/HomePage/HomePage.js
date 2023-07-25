import React from "react";
import { useState, useEffect } from "react";
import { FavoritesContext } from "../App";
import PetList from "./PetList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

export default function HomePage() {
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState([]);
  const [pets, setPets] = useState([]);
  const [breedOptions, setBreedOptions] = useState([]);

  useEffect(() => {
    fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => setPets(res.pets))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (animal) {
      fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`, {
        mode: "cors",
      })
        .then((res) => res.json())
        .then((res) => setBreedOptions(res.breeds))
        .catch((error) => console.log(error));
    } else {
      setBreed("");
      setBreedOptions([]);
    }
  }, [animal]);

  const handleSubmit = () => {
    fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => setPets(res.pets))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container>
        <Row className="px-4 my-5 font-monospace fw-bold text-success">
          <Col sm={8}>
            {" "}
            <p className="fs-4">
              Welcome to our pet photo showcase website, where you can browse
              through adorable pictures of all kinds of pets! From fluffy cats
              to playful dogs, we've got it all. Each photo is accompanied by
              basic information about the pet, such as their name, breed and a
              short description of their personality. We're dedicated to
              showcasing the beauty and uniqueness of each and every pet, and we
              hope that our website will bring a smile to your face and brighten
              up your day. So come on in, take a look around, and maybe even
              find your new furry friend!
            </p>
          </Col>
          <Col sm={4}>
            <Image src="https://i.chzbgr.com/full/8194376448/h549EF8E8/do-a-birdie-roll" />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <Container>
                <Row>
                  <Col>
                    <label htmlFor="animal">
                      Animal
                      <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                          setAnimal(e.target.value);
                        }}
                        className="form-select"
                        aria-label="Animal select"
                        style={{ width: 100 }}
                      >
                        <option defaultValue />
                        {ANIMALS.map((animal) => {
                          return (
                            <option value={animal} key={animal}>
                              {animal}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </Col>
                  <Col>
                    <label htmlFor="breed">
                      Breed
                      <select
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        className="form-select"
                        aria-label="Breed select"
                        style={{ width: 150 }}
                      >
                        <option defaultValue />
                        {breedOptions.map((breed) => (
                          <option value={breed} key={breed}>
                            {breed}
                          </option>
                        ))}
                      </select>
                    </label>
                  </Col>
                  <Col className="mt-4">
                    <label>
                      <button type="submit" className="btn btn-outline-success">
                        Submit
                      </button>
                    </label>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
          <Col className="mt-4" sm={8} style={{ textAlign: "right" }}>
            <LinkContainer to="/favorite">
              <Button variant="success">Your Saved Pets</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
      <Container>
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
    </>
  );
}
