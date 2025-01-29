import Image from "next/image";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutUsLeft}>
            <h5 className={styles.aboutSubTitle}>about us</h5>
            <h2 className={styles.aboutTitle}>
              providing reliable <br /> car rentals
            </h2>
            <Image
              src={"/images/Group-1.png"}
              alt="image"
              width={67}
              height={7}
            />
            <p className={styles.aboutdesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
              <br /> enim ad minim veniam, quis nostrud exercitation ullamco
              laboris <br /> nisi ut.
            </p>
            <p className={styles.aboutdesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.aboutInfo}>
              <div className={styles.aboutInfoItem}>
                <Image
                  src={"/images/Icon-2.png"}
                  alt="icon"
                  width={55}
                  height={55}
                />
                <h4 className={styles.aboutInfoTitle}>safe & Trusted</h4>
              </div>
              <div className={styles.aboutInfoItem}>
                <Image
                  src={"/images/Icon-1.png"}
                  alt="icon"
                  width={55}
                  height={55}
                />
                <h4 className={styles.aboutInfoTitle}>Affordable Price</h4>
              </div>
            </div>
          </div>
          <div className={styles.aboutUsRight}>
            <Image
              src={"/images/Group-2.png"}
              width={465}
              height={415}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
