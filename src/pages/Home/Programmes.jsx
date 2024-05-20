import styles from "../programmes/ProgrammesContent.module.css";
function Programmes() {
  return (
    <section className={styles.programmes}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="heading">Programmes We Offer</h1>
        <p className="heading_summary">
          We offer a broad range of subjects and programs to cater to the
          diverse educational needs of our students. The curriculum is
          structured to provide a well-rounded education that includes both
          academic and practical skills.
        </p>
      </div>

      <div className="row">
        <div className={styles.programme_column}>
          <h3>Junior Secondary School (JSS)</h3>
          <p className="text-balance">
            The Junior Secondary School (JSS) curriculum in Divine Grace
            Comprehensive High School is designed to provide a comprehensive and
            foundational education for students in the early years of secondary
            school. The JSS curriculum aims to lay the groundwork for further
            academic and practical learning while promoting the development of
            critical thinking, creativity, and essential life skills.
          </p>
        </div>
        <div className={styles.programme_column}>
          <h3>Senior Secondary School (SSS)</h3>
          <p className="text-balance">
            The Senior Secondary School (SSS) curriculum in Divine Grace
            Comprehensive High School is designed to build on the foundation
            laid during the Junior Secondary School (JSS) years. The SSS
            curriculum is more specialized, allowing students to choose a
            particular track based on their career aspirations and academic
            strengths.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Programmes;
