import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../App";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function FavoritesPage() {
  return (
    <Container>
      <FavoritesContext.Consumer>
        {(value) => (
          <Row className="px-4 my-5">
            {value.favorites.map((fav) => {
              return (
                <Col>
                  <Card className="text-center" style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={fav.images[0]}
                      alt={fav.name}
                    />
                    <Card.Body>
                      <Card.Title>{fav.name}</Card.Title>
                      <Card.Text>
                        {fav.breed} <br /> {fav.animal}
                      </Card.Text>
                      <Link to={`/detail/${fav.id}`}>
                        <Button variant="success">Detail</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </FavoritesContext.Consumer>
    </Container>
  );
}
