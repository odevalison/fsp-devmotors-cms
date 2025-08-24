"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { SubmenuPagesType } from "./types";

interface SubmenuProps {
  pages: SubmenuPagesType;
}

export const Submenu = ({ pages }: SubmenuProps) => {
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSubmenuIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleMobileSubmenu = () => {
    setSubmenuIsOpen((prev) => !prev);
  };

  return (
    <section className={styles.submenuContainer}>
      <button
        onClick={handleToggleMobileSubmenu}
        className={styles.submenuIcon}
      >
        <Menu size={34} color="#121212" />
        Serviços
      </button>

      <ul
        className={`${styles.submenuListContainerDesktop} ${
          submenuIsOpen ? styles.submenuIsOpen : ""
        }`}
      >
        {submenuIsOpen && (
          <button
            onClick={handleToggleMobileSubmenu}
            className={styles.submenuIcon}
          >
            <X size={34} color="#121212" />
          </button>
        )}

        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/post/${page.slug}`}
              className={styles.submenuListItem}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
