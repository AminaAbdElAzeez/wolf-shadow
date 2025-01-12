import styles from "./Statistics.module.css";

function Statistics() {
  return (
    <section className={styles.statistics}>
      <div className="container">
        <div className={styles.statisticsContent}>
          <div className={styles.statisticsItem}>
            <h5 className={styles.subTitle}>CAR RENTED</h5>
            <h2 className={styles.title}>240</h2>
          </div>
          <div className={styles.statisticsItem}>
            <h5 className={styles.subTitle}>SATISFIED CLIENTS</h5>
            <h2 className={styles.title}>235</h2>
          </div>
          <div className={styles.statisticsItem}>
            <h5 className={styles.subTitle}>YEARS EXPERIENCE</h5>
            <h2 className={styles.title}>12+</h2>
          </div>
          <div className={styles.statisticsItem}>
            <h5 className={styles.subTitle}>CAR TYPES</h5>
            <h2 className={styles.title}>18</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
