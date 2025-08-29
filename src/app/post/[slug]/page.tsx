import { getPageDataBySlug } from "@/utils/actions/get-page-by-slug";
import styles from "./styles.module.scss";
import { PageAPIResponseData } from "@/utils/page.type";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const { objects }: PageAPIResponseData = await getPageDataBySlug(slug);
  const page = objects[0];

  return (
    <div>
      <h1>Página {page.metadata.description.title}</h1>
    </div>
  );
};

export default Page;
