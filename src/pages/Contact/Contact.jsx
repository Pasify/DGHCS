import PageBanner from "../../components/PageBanner";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <>
      <PageBanner title="contact" />
      <section className={styles.location}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.91913377156!2d7.3603872741719725!3d5.116734094860317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429943571f5117%3A0xdea80eca03d079cb!2sDevine%20Grace%20Comprehensive%20High%20School!5e0!3m2!1sen!2sng!4v1706217172448!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          //   allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className={styles.contact_us}>
        <div className="row">
          <div className={styles.contact_column}>
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>14 Okigwe Road By Ekene (GRA) Aba,</h5>
                <p>
                  <strong>Abia State. Nigeria.</strong>
                </p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+2348162770696</h5>
                <p>
                  <strong>Monday To Friday, 7AM to 4PM</strong>
                </p>
              </span>
            </div>
            <div></div>
            <div className={styles.contact_column}>
              <i className="fa fa-envelope"></i>
              <span>
                <h5>dgchschools@gmail.com</h5>
                <p>
                  <strong>Email us your Query</strong>
                </p>
              </span>
            </div>
            <div className={styles.contact_column}>
              <form
                action="form-handler.php"
                method="post"
                className="formGroup"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
                <input
                  type="text"
                  name="Subject"
                  placeholder="Enter Your Subject"
                  required
                />
                <textarea
                  rows="8"
                  name="Message"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit" className="hero-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
