import { getPageDataBySlug } from "@/utils/actions/get-page-by-slug";
import { PageAPIResponseData } from "@/utils/page.type";
import { Metadata } from "next";
import { Content } from "./components/content";
import { Suspense } from "react";
import { LoadingPage } from "./components/loading";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;

  try {
    const {
      objects: { "0": page },
    }: PageAPIResponseData = await getPageDataBySlug(slug);

    return {
      title: `Dev Motors - ${page.title}`,
      description: `${page.metadata.description.text}`,
      keywords: ["dev motors", `${page.title.toLowerCase()}`],
      openGraph: {
        title: `Dev Motors - ${page.title}`,
        images: [`${page.metadata.banner.url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DevMotors - Oficina Dev especializada",
      description:
        "Oficina Automotiva Dev Motors São Paulo, desde 2011 especializada em consertar carros de Desenvolvedores Web!",
    };
  }
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Content slug={slug} />
      </Suspense>
    </>
  );
};

export default Page;
