import Image from "next/image";
import styles from "./ChooseUs.module.css";
import { Card } from "antd";

function ChooseUs() {
  return (
    <section className={styles.chooseUs}>
      <div className="container">
        <div className={styles.chooseUsTitle}>
          <h2>WHY CHOOSE US</h2>
          <Image
            src={"/images/Group-1.png"}
            alt="image"
            width={67}
            height={7}
          />
        </div>
        <div className={styles.chooseUsContent}>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/location-tick.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>Financing made easy</h3>
            <p className={styles.chooseUsItemDesc}>
              Choose your and find <br /> your best car
            </p>
          </Card>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/calendar.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>Wide range of brands</h3>
            <p className={styles.chooseUsItemDesc}>
              Select your pick up date and <br />
              time to book your car{" "}
            </p>
          </Card>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/car.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>Trusted by thousands</h3>
            <p className={styles.chooseUsItemDesc}>
              Book your car and we will deliver <br /> it directly to you{" "}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
