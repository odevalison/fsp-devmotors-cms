import { HomeAPIResponseData } from "@/utils/home.type";

export type ContactsType = HomeAPIResponseData["object"]["metadata"]["contact"];
export type CtaButtonType =
  HomeAPIResponseData["object"]["metadata"]["cta_button"];
