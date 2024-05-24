import { useState } from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/images/dghcslogo.png";
import styles from "./Nav.module.css";

const NavLinks = [
  {
    location: "/",
    title: "home",
  },
  {
    location: "about",
    title: "about",
  },
  {
    location: "programmes",
    title: "programmes",
  },
  {
    location: "blog",
    title: "blog",
  },
  {
    location: "contact",
    title: "contact",
  },
  {
    location: "login",
    title: "portal",
  },
];
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleOpenMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={schoolLogo} className={styles.nav_image} />
      </Link>
      <div className={styles.toggle} onClick={handleOpenMenu}>
        {isMenuOpen ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </div>
      <div
        className={`${styles.nav_links} ${isMenuOpen ? styles.menu_active : ""}`}
        id="navLinks"
      >
        <ul className={styles.nav_link_list}>
          {NavLinks.map((ele) => (
            <li key={ele} onClick={handleOpenMenu}>
              <Link to={ele.location}>
                <strong className="uppercase">{ele.title}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
