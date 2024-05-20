import styles from "./PageBanner.module.css";
function PageBanner({ title }) {
  return (
    <div className={styles.sub_header}>
      <h1 className="capitalize">{title}</h1>
    </div>
  );
}

export default PageBanner;
