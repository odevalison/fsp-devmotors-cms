"use client";

import { MenuIcon } from "lucide-react";
import styles from "./styles.module.scss";
import { useSubmenu } from "@/contexts/submenu";

export const OpenMenuButton = () => {
  const { handleToggleSubmenuIsOpen } = useSubmenu();

  return (
    <>
      <button
        onClick={handleToggleSubmenuIsOpen}
        className={styles.submenuIcon}
      >
        <MenuIcon size={34} color="#121212" />
        Serviços
      </button>
    </>
  );
};
