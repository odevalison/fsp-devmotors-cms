import Image from "next/image";
import styles from "./styles.module.scss";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonIcon: React.ReactNode;
  buttonTitle: string;
  bannerUrl: string;
}

export const Hero = ({
  bannerUrl,
  buttonTitle,
  buttonUrl,
  heading,
  buttonIcon,
}: HeroProps) => {
  return (
    <main className={styles.mainContainer} id="hero">
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>{heading}</h1>

        <a target="_blank" href={buttonUrl} className={styles.heroCtaBtn}>
          {buttonIcon}
          {buttonTitle}
        </a>
      </div>

      <div className={styles.contentBanner}>
        <Image
          alt={heading}
          src={bannerUrl}
          quality={100}
          className={styles.bannerImg}
          priority
          fill
        />
      </div>
    </main>
  );
};
