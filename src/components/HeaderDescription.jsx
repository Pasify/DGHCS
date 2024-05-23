import { Link } from "react-router-dom";
import * as styles from "./HeaderDescription.module.css";
function HeaderDescription() {
  return (
    <div className={styles.header}>
      <div className={styles.text_box}>
        <h1 className="max-w-[80%]  text-[1.7rem] font-bold leading-[35px] sm:max-w-[60%] sm:text-[2rem] md:max-w-[50%] md:text-[3.5rem] md:leading-[50px]">
          Divine Grace Comprehensive High School
        </h1>
        <p className=" w-[100%] min-w-[50%] max-w-[85%] text-balance text-[.85rem] sm:text-lg md:max-w-[65%]">
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
