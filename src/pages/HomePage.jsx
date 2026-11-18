import { Link } from "react-router-dom";
function HomePage() {
  return (
    <section>
      <h1>Find your next home</h1>
      <p>Explore rental properties that match your needs.</p>
      <Link className="primary-link" to="/listings">
        Browse rentals
      </Link>
    </section>
  );
}

export default HomePage;
