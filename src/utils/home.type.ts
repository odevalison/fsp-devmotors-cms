export interface HomeAPIResponseData {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
        };
      };
      services: HomeServicesData[];
      contact: {
        email: string;
        phone: string;
        address: string;
        time: string;
      };
    };
  };
}

interface HomeServicesData {
  image: {
    url: string;
  };
  description: string;
}
