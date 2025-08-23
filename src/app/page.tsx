import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getHomeData } from "@/utils/actions/get-home-data";
import type { HomeAPIResponseData } from "@/utils/home.type";
import { PhoneIcon } from "lucide-react";
import styles from "./styles.module.scss";
import { Container } from "@/components/container";

const HomePage = async () => {
  const { object }: HomeAPIResponseData = await getHomeData();

  return (
    <main className={styles.mainContainer}>
      <Submenu />

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
      </Container>
    </main>
  );
};

export default HomePage;
