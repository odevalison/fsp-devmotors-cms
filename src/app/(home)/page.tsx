import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { ContactsFooter } from "@/components/home/contacts-footer";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getHomeData } from "@/utils/actions/get-home-data";
import { getSubmenuData } from "@/utils/actions/get-submenu-data";
import type { HomeAPIResponseData } from "@/utils/home.type";
import type { SubmenuAPIResponseData } from "@/utils/submenu.type";
import { PhoneCall } from "lucide-react";
import styles from "./styles.module.scss";

const HomePage = async () => {
  const [{ object }, { objects: pages }]: [
    HomeAPIResponseData,
    SubmenuAPIResponseData
  ] = await Promise.all([getHomeData(), getSubmenuData()]);

  return (
    <main className={styles.mainContainer}>
      {!!pages.length && <Submenu pages={pages} />}

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonIcon={<PhoneCall size={18} color="#fff" />}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
      />

      <Container>
        <Services
          about={object.metadata.about}
          services={object.metadata.services}
        />
        <ContactsFooter
          contacts={object.metadata.contact}
          ctaButton={object.metadata.cta_button}
        />
      </Container>
    </main>
  );
};

export default HomePage;
