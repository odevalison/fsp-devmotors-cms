export const getHomeData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/68a13c15d2eb0c9d58cb4857?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata,type`,
      { next: { revalidate: 120 } }
    );

    const successfullyResponse = response.ok;
    if (!successfullyResponse) {
      throw new Error("Something wrong in data fetch.");
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw Error(err.message);
    }

    throw new Error("Failed to fetch data");
  }
};
