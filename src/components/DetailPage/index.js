import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Detail() {
  const [pet, setPet] = useState([]);
  const [selected, setSelected] = useState(0);

  let params = useParams();
  // console.log(params.pet_id);

  useEffect(() => {
    fetch(`https://pets-v2.dev-apis.com/pets?id=${params.pet_id}`)
      .then((res) => res.json())
      .then((res) => setPet(res.pets[0]))
      .catch((error) => console.log(error));
  }, []);

  const { name, animal, breed, city, state, description, images } = pet;
  // console.log(images);

  const handleClick = (e) => {
    setSelected(+e.target.dataset.number);
    // console.log(e.target.dataset.index);
  };

  return (
    <Container>
      <Row className="mx-auto my-5" style={{ width: "500px" }}>
        {images && <Image src={images[selected]} alt={name} roundedCircle />}
      </Row>
      <Row className="my-5">
        {images &&
          images.map((image, index) => (
            <Col>
              <Image
                className="img-thumbnail"
                key={image}
                src={image}
                alt="smallphoto"
                data-number={index}
                onClick={handleClick}
                style={{ width: "250px" }}
              />
            </Col>
          ))}
      </Row>
      <Row className="my-5">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              <h1>{name}</h1>
            </Card.Title>
            <Card.Text>
              <h2>
                {animal} - {breed} - {city},{state}
              </h2>
              <p>{description}</p>
            </Card.Text>
            <LinkContainer to="/">
              <Button variant="success">Go Back Home</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
