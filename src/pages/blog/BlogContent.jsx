import dghcslibrary from "../../assets/images/dghcslibrary.jpg";
import styles from "./BlogContent.module.css";
function BlogContent() {
  return (
    <section className={styles.blog_content}>
      <div className="row">
        <div className={styles.blog_left}>
          <img src={dghcslibrary} />
          <h2>REASONS WHY WE STAND OUT FROM THE REST</h2>
          <p>
            <strong>Tailored Certificate Programs:</strong>
            Explore our carefully curated certificate programs designed to meet
            the demands of evolving industries. Whether you seek to expand your
            skill set, delve into a new field, or enhance your expertise, our
            programs are tailored for your success.
          </p>
          <p>
            <strong>Flexible Learning with Online Programs:</strong>
            Embrace the future of education with our flexible online programs.
            Our virtual classrooms provide a dynamic learning environment,
            offering convenience without compromising the quality of
            instruction. Learn from anywhere, anytime, and at your own pace.
          </p>
          <p>
            <strong>Cutting-Edge Curriculum:</strong>
            Stay at the forefront of knowledge with our cutting-edge curriculum.
            Our programs are crafted to provide practical, up-to-date insights
            that align with industry standards, ensuring you acquire relevant
            skills for today's competitive landscape.
          </p>
          <p>
            <strong>Career-Focused Approach:</strong>
            Our programs are strategically designed to align with your career
            goals. Whether you're aiming for advancement in your current field
            or exploring new opportunities, our offerings are tailored to meet
            the needs of a dynamic job market
          </p>
          <p>
            <strong>Personalized Support and Mentorship:</strong>
            Benefit from personalized support and mentorship from our dedicated
            faculty. We understand that each learner is unique, and our
            instructors are committed to guiding you on your educational
            journey, offering valuable insights and encouragement.
          </p>

          <div className={styles.comment_box}>
            <h3>Leave a Comment</h3>
            <form className={styles.comment_form}>
              <input type="text" placeholder="Enter Your Name" />
              <input type="email" placeholder="Enter Your Email" />
              <textarea rows="5" placeholder="Your Comment"></textarea>
              <button type="submit" className="hero-btn">
                Post Comment
              </button>
            </form>
          </div>
        </div>
        <div className={styles.blog_right}>
          <h3>Post Categories</h3>
          <div>
            <span>Student Life</span>
            <span>21</span>
          </div>
          <div>
            <span>Alumni Success Stories</span>
            <span>29</span>
          </div>
          <div>
            <span>Educational Trends</span>
            <span>15</span>
          </div>
          <div>
            <span>Community Outreach</span>
            <span>31</span>
          </div>
          <div>
            <span>Sports and Athletics</span>
            <span>50</span>
          </div>
          <div>
            <span>Admissions and Enrollment</span>
            <span>80</span>
          </div>
          <div>
            <span>Parental Involvement</span>
            <span>20</span>
          </div>
          <div>
            <span>Technology in Education</span>
            <span>34</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
