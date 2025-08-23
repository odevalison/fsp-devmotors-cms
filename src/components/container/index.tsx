import styles from "./styles.module.scss";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.centralizingContainer}>{children}</div>;
};
