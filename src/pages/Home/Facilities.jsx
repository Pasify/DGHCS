import library from "../../assets/images/dghcslibrary.jpg";
import dghcsAbout from "../../assets/images/dgchsabout.jpg";
import cafeteria from "../../assets/images/Cafeteria.jpg";
import styles from "../programmes/Facilities.module.css";
function Facilities() {
  return (
    <section className={styles.facilities}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="heading">Our Facilities</h1>
        <p className="heading_summary">
          Divine Grace Comprehensive High School boast of a range of modern and
          well equipped facilities, fostering an enriching educational
          environment
        </p>
      </div>

      <div className="row">
        <div className={styles.facilities_column}>
          <img src={library} />
          <h3 className="text-lg font-semibold">World ClassName Library</h3>
          <p className="text-balance">
            Divine Grace High School's library, a hub of knowledge, offers
            students a diverse collection of resources in a modern and serene
            environment. Equipped with the latest materials, it promotes
            research and stands as a cornerstone of academic excellence
          </p>
        </div>
        <div className={styles.facilities_column}>
          <img src={dghcsAbout} />
          <h3 className="text-lg font-semibold">
            {" "}
            Cutting-Edge Computer Laboratory
          </h3>
          <p className="text-balance">
            At Divine Grace, we recognize the pivotal role of technology in
            shaping the future. Our state-of-the-art Computer Laboratory stands
            as a testament to our commitment to providing students with an
            immersive and innovative learning experience.
          </p>
        </div>
        <div className={styles.facilities_column}>
          <img src={cafeteria} />
          <h3 className="text-lg font-semibold">School Cafeteria</h3>
          <p className="text-balance">
            At Divine Grace, we believe that a nourished body contributes to a
            vibrant mind. Our school cafeteria is not just a place to refuel; it
            &apos;s a social hub where students come together, creating a lively
            atmosphere that complements the academic experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
