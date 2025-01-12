"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ActiveLink from "../activeLink/activeLink";
import styles from "./header.module.css";

function Header() {
  const [isClick, setIsClick] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure that the component is rendering on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleNavbar = () => {
    setIsClick((prev) => !prev);
  };

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsClick(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link rel="preload" href="/">
            <Image
              src="/images/Artboard.png"
              alt="Logo"
              width={89}
              height={70}
              priority
            />
          </Link>

          {isClient && (
            <>
              <ul className={styles.navLinks}>
                <li>
                  <ActiveLink href={"/"}>home</ActiveLink>
                </li>
                <li>
                  <ActiveLink href={"/works"}>Works</ActiveLink>
                </li>
                <li>
                  <ActiveLink href={"/services"}>services</ActiveLink>
                </li>
                <li>
                  <ActiveLink href={"/about"}>About us</ActiveLink>
                </li>
                <li>
                  <ActiveLink href={"/contact"}>contact</ActiveLink>
                </li>
              </ul>
              <button className={styles.orderBtn}>Order Services</button>
              <div className={styles.mobileMenu}>
                <button className={styles.mobileToggle} onClick={toggleNavbar}>
                  {isClick ? (
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {isClick && isClient && (
        <div className={styles.mobileDropdown}>
          <ul className={styles.mobileLinks}>
            <li>
              <ActiveLink href={"/"}>home</ActiveLink>
            </li>
            <li>
              <ActiveLink href={"/products"}>products</ActiveLink>
            </li>
            <li>
              <ActiveLink href={"/order"}>order</ActiveLink>
            </li>
            <li>
              <ActiveLink href={"/about"}>about us</ActiveLink>
            </li>
            <li>
              <button className={styles.mobileOrderButton}>
                Order Services
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
