import { Link } from "react-router-dom";
import * as styles from "./HeaderDescription.module.css";
function HeaderDescription() {
  return (
    <div className={styles.header}>
      <div className={styles.text_box}>
        <h1>Divine Grace Comprehensive High School</h1>
        <p className="">
          Welcome to Divine Grace Comprehensive High School, We extend a warm
          invitation to a world where learning and growth converge. Our Mission
          is to inspire and empower our students to reach their full potential
          Stay connected with the latest news, events, and achievements
        </p>

        <Link to="contact" className="hero-btn">
          Visit Us To Know More
        </Link>
      </div>
    </div>
  );
}

export default HeaderDescription;
