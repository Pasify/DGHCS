import { Link } from "react-router-dom";
import schoolLogo from "../assets/images/dghcslogo.png";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={schoolLogo} className={styles.nav_image} />
      </Link>
      <div className={styles.nav_links} id="navLinks">
        <i className="fa fa-times"></i>
        <ul>
          <li>
            <Link to="/">
              <strong>HOME</strong>
            </Link>
          </li>
          <li>
            <Link to="about">
              <strong>ABOUT</strong>
            </Link>
          </li>
          <li>
            <Link to="programmes">
              <strong>PROGRAMMES</strong>
            </Link>
          </li>
          <li>
            <Link to="blog">
              <strong>BLOG</strong>
            </Link>
          </li>
          <li>
            <Link to="contact">
              <strong>CONTACT</strong>
            </Link>
          </li>
          <li>
            <Link to="login">
              <strong>PORTAL</strong>
            </Link>
          </li>
        </ul>
      </div>
      <i className="fa fa-bars"></i>
    </nav>
  );
}

export default Nav;
