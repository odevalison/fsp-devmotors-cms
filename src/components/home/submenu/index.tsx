"use client";

import { useSubmenu } from "@/contexts/submenu";
import Link from "next/link";
import { useEffect } from "react";
import { CloseMenuButton } from "./components/close-menu-button";
import { OpenMenuButton } from "./components/open-menu-button";
import styles from "./styles.module.scss";
import { SubmenuPagesType } from "./types";

interface SubmenuProps {
  pages: SubmenuPagesType;
}

export const Submenu = ({ pages }: SubmenuProps) => {
  const { submenuIsOpen, setSubmenuIsOpen } = useSubmenu();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSubmenuIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.submenuContainer}>
      <OpenMenuButton />

      <ul
        className={`${styles.submenuListContainerDesktop} ${
          submenuIsOpen ? styles.submenuIsOpen : ""
        }`}
      >
        <CloseMenuButton />

        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/page/${page.slug}`}
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
