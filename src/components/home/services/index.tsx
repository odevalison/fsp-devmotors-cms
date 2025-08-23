import Image from "next/image";
import styles from "./styles.module.scss";
import type { HomeAPIResponseData } from "@/utils/home.type";

type ServicesAboutProps = HomeAPIResponseData["object"]["metadata"]["about"];

interface ServicesProps {
  about: ServicesAboutProps;
}

export const Services = ({ about }: ServicesProps) => {
  return (
    <section className={styles.aboutContainer}>
      <article className={styles.innerAboutContent}>
        <h1 className={styles.innerAboutTitle}>Sobre</h1>
        <p className={styles.innerAboutDescription}>{about.description}</p>
      </article>

      <div className={styles.innerAboutBanner}>
        <Image
          src={about.banner.url}
          alt="Imagem ilustrativa que demonsta um pouco da nossa empresa."
          className={styles.innerAboutImage}
          quality={100}
          priority
          fill
        />
      </div>
    </section>
  );
};
