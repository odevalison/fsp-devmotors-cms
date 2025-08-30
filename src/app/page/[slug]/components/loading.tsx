import styles from "./loading.module.scss";

export const LoadingPage = () => {
  return (
    <div className={styles.loadingContainer}>
      <h1 className={styles.loadingText}>Carregando página...</h1>
    </div>
  );
};
