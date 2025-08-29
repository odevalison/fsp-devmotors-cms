export type PageAPIResponseData = {
  objects: PageObjectsType[];
};

type PageObjectsType = {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    button: {
      button_title: string;
      button_url: string;
    };
    description: {
      title: string;
      text: string;
      banner: {
        url: string;
      };
      has_cta_button: boolean;
      cta_button_title: string;
      cta_button_url: string;
    };
  };
};
