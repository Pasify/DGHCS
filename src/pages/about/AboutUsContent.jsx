import { Link } from "react-router-dom";
import dgchsAbout from "../../assets/images/dgchsabout.jpg";
import styles from "./AboutUsContent.module.css";
function AboutUsContent() {
  return (
    <section className={styles.aboutus}>
      <div className="row">
        <div className={styles.about_column}>
          <h1 className="text-3xl font-bold capitalize">
            we Are The Premier Choice For Your Child's Education
          </h1>
          <p>
            We believe in nurturing not only the intellect but also the
            character of every student. Divine Grace places a strong emphasis on
            holistic development, ensuring that each child emerges not only
            academically accomplished but also equipped with essential life
            skills and values.
          </p>
          <Link to="#" className="hero-btn">
            EXPLORE NOW
          </Link>
        </div>
        <div className={styles.about_column}>
          <img src={dgchsAbout} />
        </div>
      </div>
    </section>
  );
}

export default AboutUsContent;
