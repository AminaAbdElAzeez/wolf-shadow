"use client";
import Image from "next/image";
import styles from "./Offer.module.css";
import { useTranslation } from "react-i18next";
function Offer() {
  const { t } = useTranslation("translation");
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
            <h5 className={styles.subTitle}>{t("offerSubtitle")}</h5>
            <h2 className={styles.title}>
              <span>{t("offertitle1")}</span>
              <br /><span>{t("offertitle2")}</span>
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
                  <h3>{t("offertitle3")}</h3>
                  <p>
                    <span >{t("offerDesc1")}Find a lower price? We’ll refund you 100% </span><br /> <span>of the
                    difference.</span>
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
                  <h3>{t("offertitle4")}Experience Services</h3>
                  <p>{t("offerDesc2")}
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
                  <h3>{t("offertitle5")}24 hour car delivery</h3>
                  <p>{t("offerDesc3")}
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
                  <h3>{t("offertitle6")}24/7 technical support</h3>
                  <p>{t("offerDesc4")}
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
