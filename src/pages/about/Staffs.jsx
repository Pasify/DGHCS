import nnennaPhoto from "../../assets/images/nnenna.jpg";
import agunwamiPhoto from "../../assets/images/agunwami (1).jpg";
import lovinaPhoto from "../../assets/images/lovina.jpg";
import styles from "./Staff.module.css";
function Staffs() {
  return (
    <section className="team">
      <h1 className={styles.staffheading}>
        <strong>Meet Our Board of Directors</strong>
      </h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.imgBx}>
              <img src={nnennaPhoto} />
            </div>
            <div className={styles.contentBx}>
              <h4>Barr. Nnnenna Onwuka</h4>
              <h5>CEO</h5>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.imgBx}>
              <img src={agunwamiPhoto} />
            </div>
            <div className={styles.contentBx}>
              <h4>Agu Nwami</h4>
              <h5>Director</h5>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.imgBx}>
              <img src="images/amarachi.jpg" />
            </div>
            <div className={styles.contentBx}>
              <h4>Amarachi Okoroafor</h4>
              <h5>Director</h5>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.imgBx}>
              <img src="images/amaka.jpg" />
            </div>
            <div className={styles.contentBx}>
              <h4>Amaka Onwuka</h4>
              <h5>Director</h5>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.imgBx}>
              <img src={lovinaPhoto} />
            </div>
            <div className={styles.contentBx}>
              <h4>Dr. Lovina Larri</h4>
              <h5>Director</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Staffs;
