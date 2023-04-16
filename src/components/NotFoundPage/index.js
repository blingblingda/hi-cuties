import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import { Container, Button } from "react-bootstrap";

export default function NotFoundPage() {
  return (
    <Container>
      <div className="my-5 text-center ">
        <h1 className="text-success">Uh oh, that page doesn't exist.</h1>
        <section className="error-container">
          <span>4</span>
          <span>
            <span className="screen-reader-text">0</span>
          </span>
          <span>4</span>
        </section>
        <div className="link-container">
          <Link to="/">
            <Button variant="success" className="position-relative">
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
