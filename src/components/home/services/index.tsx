import Image from "next/image";
import styles from "./styles.module.scss";
import { ServicesAboutType, ServicesType } from "./types";

interface ServicesProps {
  about: ServicesAboutType;
  services: ServicesType;
}

export const Services = ({ about, services }: ServicesProps) => {
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
            className={styles.innerAboutImage}
            quality={100}
            priority
            fill
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.servicesContainer}>
        {services.map((service, index) => (
          <article key={index} className={styles.serviceContainer}>
            <div className={styles.innerServiceContainer}>
              <Image
                src={service.image.url}
                alt={`Imagem ilustrativa sobre o serviço de ${service.description}.`}
                className={styles.innerServiceImage}
                quality={100}
                priority
                fill
              />
            </div>
            <p className={styles.innerServiceDescription}>
              {service.description}
            </p>
          </article>
        ))}
      </section>
    </>
  );
};
