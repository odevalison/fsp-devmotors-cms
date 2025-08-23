"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Submenu = () => {
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);

  useEffect(() => {
    // Função que verifica se a largura da tela redimensionada é maior que 768px
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSubmenuIsOpen(false);
      }
    };

    // Executa a função `handleResize` toda vez que a tela for redimensionada.
    window.addEventListener("resize", handleResize);

    // Remove o ouvidor do evento de `resize` se o componente for desmontado
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

        <li>
          <Link href="/post/pagina-1" className={styles.submenuListItem}>
            Página 1
          </Link>
        </li>
        <li>
          <Link href="/post/pagina-2" className={styles.submenuListItem}>
            Página 2
          </Link>
        </li>
      </ul>
    </section>
  );
};
