import Image from "next/image";
import { ServicesAboutType } from "../services/types";
import styles from "./styles.module.scss";

interface AboutProps {
  about: ServicesAboutType;
}

export const About = ({ about }: AboutProps) => {
  return (
    <>
      <section className={styles.aboutContainer}>
        <article className={styles.innerAboutContent}>
          <h1 className={styles.innerAboutTitle}>Sobre</h1>
          <p className={styles.innerAboutDescription}>{about.description}</p>
        </article>

        <div className={styles.innerAboutBanner}>
          <Image
            src={about.banner.url}
            alt="Imagem ilustrativa que demonsta um pouco da nossa empresa."
            quality={100}
            priority={true}
            fill={true}
            sizes="(max-width: 480px) 100dvw, (max-width: 1024px) 75dvw, 60dvw"
            className={styles.innerAboutImage}
          />
        </div>
      </section>
    </>
  );
};
