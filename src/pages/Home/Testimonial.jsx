import student1 from "../../assets/images/student1.jpg";
import student2 from "../../assets/images/student2.jpg";
import styles from "./Testimonial.module.css";
function Testimonial() {
  return (
    <section className={styles.testimonials}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="heading">What Our Students Say About Us</h1>
        <p className="heading_summary">
          Discover what our students say about Divine Grace Comprehensive High
          School:
        </p>
      </div>

      <div className="row">
        <div className={styles.testimonial_column}>
          <div className={`${styles.image_container}`}>
            <img src={student1} />
          </div>
          <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
            <p>
              At DGCHS, I found more than just education; I found a supportive
              community that encourages personal development and exploration of
              talents.
            </p>
            <h3 className=" font-semibold text-accent">Christine Berkley</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
          </div>
        </div>
        <div className={styles.testimonial_column}>
          <div className={`${styles.image_container}`}>
            <img src={student2} />
          </div>
          <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
            <p>
              DGCHS not only focuses on academics but also cultivates a sense of
              responsibility and leadership. I'm proud to be part of this
              dynamic school.
            </p>
            <h3 className="font-semibold text-accent">Anita Benson</h3>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
