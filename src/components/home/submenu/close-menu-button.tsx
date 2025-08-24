"use client";

import { XIcon } from "lucide-react";
import styles from "./styles.module.scss";
import { useSubmenu } from "@/contexts/submenu";

export const CloseMenuButton = () => {
  const { submenuIsOpen, handleToggleSubmenuIsOpen } = useSubmenu();

  return (
    <>
      {submenuIsOpen && (
        <button
          onClick={handleToggleSubmenuIsOpen}
          className={styles.submenuIcon}
        >
          <XIcon size={34} color="#121212" />
        </button>
      )}
    </>
  );
};
