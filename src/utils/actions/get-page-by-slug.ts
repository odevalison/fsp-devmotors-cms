import { redirect } from "next/navigation";

export const getPageDataBySlug = async (pageSlug: string) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  // Definindo objeto de consulta pelo slug
  const queryParams = new URLSearchParams({
    query: JSON.stringify({ slug: pageSlug }),
    props: "slug,title,metadata",
    read_key: process.env.COSMIC_READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { next: { revalidate: 120 } });
    const successfullyResponse = response.ok;

    if (!successfullyResponse) {
      throw new Error("A página procurada não foi encontrada.");
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw Error(err.message);
    }
  }
};
