"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type SubmenuContextData = {
  submenuIsOpen: boolean;
  handleToggleSubmenuIsOpen: () => void;
  setSubmenuIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SubmenuContext = createContext<SubmenuContextData>(
  {} as SubmenuContextData
);

const SubmenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);

  const handleToggleSubmenuIsOpen = () => {
    setSubmenuIsOpen((prevStateValue) => !prevStateValue);
  };

  return (
    <SubmenuContext
      value={{ submenuIsOpen, handleToggleSubmenuIsOpen, setSubmenuIsOpen }}
    >
      {children}
    </SubmenuContext>
  );
};

export const useSubmenu = () => useContext(SubmenuContext);
export default SubmenuProvider;
