import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <Link href="/">
            <Image
              src="/images/footer-logo.png"
              alt="Logo"
              width={180}
              height={138}
            />
          </Link>
          <div className={styles.footerItem}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <ul className={footerSocialList}>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/public/images/facebook.png"}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/public/images/twitter.png"}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/public/images/instagram.png"}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/public/images/youtube.png"}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <ul className={styles.footerLinks}>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/public/images/twitter.png"}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/public/images/instagram.png"}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/public/images/youtube.png"}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
