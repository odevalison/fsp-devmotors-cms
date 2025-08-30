import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import styles from "./content.module.scss";
import { PageAPIResponseData } from "@/utils/page.type";
import { getPageDataBySlug } from "@/utils/actions/get-page-by-slug";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";

export const Content = async ({ slug }: { slug: string }) => {
  const {
    objects: { "0": page },
  }: PageAPIResponseData = await getPageDataBySlug(slug);

  return (
    <>
      <Hero
        bannerUrl={page.metadata.banner.url}
        buttonTitle={page.metadata.button.button_title}
        buttonUrl={page.metadata.button.button_url}
        buttonIcon={<PhoneIcon size={24} color="#fff" />}
        heading={page.title}
      />

      <Container>
        <section className={styles.pageAbout}>
          <article className={styles.pageInnerAbout}>
            <h1 className={styles.pageInnerAboutTitle}>
              {page.metadata.description.title}
            </h1>
            <p className={styles.pageInnerAboutDescription}>
              {page.metadata.description.text}
            </p>

            {!!page.metadata.description.has_cta_button && (
              <a
                target="_blank"
                href={page.metadata.description.cta_button_url as string}
                className={styles.pageInnerAboutCta}
              >
                {page.metadata.description.cta_button_title}
              </a>
            )}
          </article>

          <div className={styles.pageAboutBanner}>
            <Image
              src={page.metadata.description.banner.url}
              alt={page.title}
              sizes="(max-width: 480px) 100dvw, (max-width: 1024px) 75dvw, 60dvw"
              quality={100}
              priority={true}
              fill={true}
              className={styles.pageAboutBannerImage}
            />
          </div>
        </section>
      </Container>
    </>
  );
};
