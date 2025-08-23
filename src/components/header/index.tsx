"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Header = () => {
  const [isInTheTop, setIsInTheTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setIsInTheTop(false) : setIsInTheTop(true);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isInTheTop]);

  return (
    <header
      className={`${styles.headerContainer} ${
        !isInTheTop ? styles.fixed : styles.background
      }`}
    >
      <div className={styles.headerContent}>
        <Link href="/" className={styles.headerLogo}>
          DevMotors
        </Link>

        <nav className={styles.headerNavContainer}>
          <Link href="/">Home</Link>
          <Link href="#servicos">Serviços</Link>
          <Link href="#contatos">Contatos</Link>
        </nav>
      </div>
    </header>
  );
};
