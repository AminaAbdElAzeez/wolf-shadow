import styles from "./Platform.module.css";
function Platform() {
  return (
    <section className={styles.platform}>
      <div className={styles.platformContent}>
        <div className="container">
          <div className={styles.platformText}>
            <h5 className={styles.subTitle}>/ Car in easy staps</h5>
            <h1 className={styles.title}>
              perfeet way to buy <br />
              and sell car on our <br /> platform
            </h1>
            <button className={styles.platformBtn}>Knew More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
