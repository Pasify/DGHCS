import { Link } from "react-router-dom";

function Cta() {
  return (
    <section className="cta">
      <h1>Enroll Your Child Into Divine Grace Comprehensive High School</h1>
      <Link to="contact" className="hero-btn">
        CONTACT US
      </Link>
    </section>
  );
}

export default Cta;
