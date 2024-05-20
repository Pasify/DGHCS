import schoolFrontYard from "../../assets/images/dgchsfront.jpg";
import schoolBack from "../../assets/images/dgchsback.jpg";
import schoolSide from "../../assets/images/dgchs.jpg";
import styles from "./Campus.module.css";
function Campus() {
  return (
    <section className={styles.campus}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="heading">Explore Our School Environment</h1>
        <p className="heading_summary text-balance">
          Embark on a virtual journey through our state-of-the-art facilities,
          lush greenery, and engaging learning spaces. From modern classrooms
          equipped with cutting-edge technology to dynamic recreational areas,
          explore the elements that make learning at Divine Grace Comprehensive
          High School a unique and enriching experience.
        </p>
      </div>

      <div className="row">
        <div className={styles.campus_column}>
          <img src={schoolFrontYard} />
          <div className={styles.layer}>
            <h3>FRONT VIEW</h3>
          </div>
        </div>
        <div className={styles.campus_column}>
          <img src={schoolSide} />
          <div className={styles.layer}>
            <h3>SIDE VIEW</h3>
          </div>
        </div>
        <div className={styles.campus_column}>
          <img src={schoolBack} />
          <div className={styles.layer}>
            <h3>BACK VIEW</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campus;
