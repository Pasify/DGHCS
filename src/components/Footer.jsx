import { Button, Input } from "@material-tailwind/react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.col_1}>
        <h3>USEFUL LINKS</h3>
        <Link to="index">home</Link>
        <Link to="about">about us</Link>
        <Link to="programmes">programmes</Link>
        <Link to="blog">blog</Link>
        <Link to="login">portal</Link>
      </div>

      <div className={styles.col_3}>
        <h3>CONTACT</h3>
        <p className="w-[70%]">
          14 Okigwe Road By Ekene (GRA) Aba, Abia State. Nigeria.
        </p>
        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <p className="branding text-[12px]">
          Website Developer
          <i className="fa fa-laptop"></i>
          <a href="https://bit.ly/samwebdeveloper"> Mr Sam</a>
        </p>
      </div>
      <div className={styles.col_2}>
        <h3>NEWSLETTER</h3>
        <form className={styles.footer_form}>
          <Input
            type="email"
            color="white"
            label=" Your Email Address"
            // placeholder="Enter Your Email"
            required
          />
          <Button type="submit" color="white">
            SUBSCRIBE
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
