import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={photo}
        alt={name}
        style={{ width: "18rem", height: "19rem" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {breed} <br /> {animal}
        </Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
        <Container>
          <Row>
            <Col md={4}>
              {isFave ? (
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    handleRemoveAnimal(props);
                    setIsFave(false);
                  }}
                >
                  <i class="bi bi-star-fill"></i>
                </Button>
              ) : (
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    handleAddAnimal(props);
                    setIsFave(true);
                  }}
                >
                  <i class="bi bi-star"></i>
                </Button>
              )}
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <LinkContainer to={`/detail/${id}`}>
                <Button variant="success">Details</Button>
              </LinkContainer>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
