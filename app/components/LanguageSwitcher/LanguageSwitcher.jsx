"use client";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import i18nextConfig from "../../../next-i18next.config";
import styles from "./LanguageSwitcher.module.css";
import Image from "next/image";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const toggleLanguage = async () => {
    if (!i18n || !i18n.changeLanguage) {
    //   console.error("i18n is not initialized");
      return;
    }

    const newLang = i18n.language === "en" ? "ar" : "en";

    try {
      await i18n.changeLanguage(newLang);
      localStorage.setItem("language", newLang);
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

      router.refresh();
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <button className={styles.langToggleBtn} onClick={toggleLanguage}>
      <Image
        src={"/images/Flag_of_Saudi_Arabia.svg.webp"}
        alt="flag"
        width={48}
        height={32}
      />
    </button>
  );
};

export default LanguageSwitcher;
