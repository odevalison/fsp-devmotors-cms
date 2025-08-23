import type { HomeAPIResponseData } from "@/utils/home.type";

export type ServicesAboutType =
  HomeAPIResponseData["object"]["metadata"]["about"];

export type ServicesType =
  HomeAPIResponseData["object"]["metadata"]["services"];
