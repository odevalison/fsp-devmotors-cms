import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { ContactsFooter } from "@/components/home/contacts-footer";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getHomeData } from "@/utils/actions/get-home-data";
import type { HomeAPIResponseData } from "@/utils/home.type";
import { PhoneIcon } from "lucide-react";
import styles from "./styles.module.scss";
import { getSubmenuData } from "@/utils/actions/get-submenu-data";
import { SubmenuAPIResponseData } from "@/utils/submenu.type";

const HomePage = async () => {
  const { object }: HomeAPIResponseData = await getHomeData();
  const { objects: pages }: SubmenuAPIResponseData = await getSubmenuData();

  return (
    <main className={styles.mainContainer}>
      {!!pages.length && <Submenu pages={pages} />}

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonIcon={<PhoneIcon size={20} color="#fff" />}
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
          appName={object.title}
        />
      </Container>
    </main>
  );
};

export default HomePage;
