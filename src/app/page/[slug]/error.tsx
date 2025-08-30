"use client";

import Link from "next/link";
import styles from "./error.module.scss";

const ErrorPage = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <main className={styles.errorContainer}>
      <h1 className={styles.errorContainerTitle}>{error.message}</h1>
      <Link href="/" className={styles.errorComebackHomeButton}>
        Voltar para a home
      </Link>
    </main>
  );
};

export default ErrorPage;
