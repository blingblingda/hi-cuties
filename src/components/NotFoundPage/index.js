import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>Uh oh, that page doesn't exist.</h1>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Return to the Home Page
        </Link>
      </div>
    </div>
  );
}
