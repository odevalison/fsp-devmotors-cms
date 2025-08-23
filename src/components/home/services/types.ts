import type { HomeAPIResponseData } from "@/utils/home.type";

type ServicesAboutType = HomeAPIResponseData["object"]["metadata"]["about"];

type ServicesType = HomeAPIResponseData["object"]["metadata"]["services"];

export type { ServicesAboutType, ServicesType };
