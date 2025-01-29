import Image from "next/image";
import styles from "./Offer.module.css";
function Offer() {
  return (
    <section className={styles.Offer}>
      <div className="container">
        <div className={styles.OfferContent}>
          <div className={styles.offerLeft}>
            <Image
              src={"/images/Group.png"}
              alt="image"
              width={500}
              height={400}
            />
          </div>
          <div className={styles.offerRight}>
            <h5 className={styles.subTitle}>WHY CHOOSE US</h5>
            <h2 className={styles.title}>
              We offer the best experience
              <br /> with our rental deals
            </h2>
            <ul className={styles.offerList}>
              <li>
                <div className={styles.offerListImg}>
                  <Image
                    src={"/images/wallet.png"}
                    alt="image"
                    width={24}
                    height={25}
                  />
                </div>
                <div className={styles.offerInfo}>
                  <h3>Best price guaranteed</h3>
                  <p>
                    Find a lower price? We’ll refund you 100% <br /> of the
                    difference.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.offerListImg}>
                  <Image
                    src={"/images/user-tick.png"}
                    alt="image"
                    width={24}
                    height={25}
                  />
                </div>
                <div className={styles.offerInfo}>
                  <h3>Experience Services</h3>
                  <p>
                    Don’t worry, we have many experienced <br /> services for
                    you.{" "}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.offerListImg}>
                  <Image
                    src={"/images/24-support.png"}
                    alt="image"
                    width={24}
                    height={25}
                  />
                </div>
                <div className={styles.offerInfo}>
                  <h3>24 hour car delivery</h3>
                  <p>
                    Book your car anytime and we will deliver it <br /> directly
                    to you.{" "}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.offerListImg}>
                  <Image
                    src={"/images/messages-2.png"}
                    alt="image"
                    width={24}
                    height={25}
                  />
                </div>
                <div className={styles.offerInfo}>
                  <h3>24/7 technical support</h3>
                  <p>
                    Have a question? Contact Rentcars support <br /> any time
                    when you have problem.{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
