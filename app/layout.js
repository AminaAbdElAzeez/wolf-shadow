"use client";

import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { appWithTranslation, useTranslation } from "next-i18next";
import i18nextConfig from "../next-i18next.config";
import '../app/lib/i18n'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Wolf Shadow",
//   icon: "icon.png",
//   description: "Welcome to Wolf Shadow.",
//   keywords: "Next.js, React, Web Development, Frontend",
//   author: "Apps Square Team",
//   robots: "index, follow",
// };

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18nextConfig.i18n.defaultLocale);

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    if (storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);
  
  

  return (
    <html lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
      <body className={`${poppins.variable} ${robotoMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}