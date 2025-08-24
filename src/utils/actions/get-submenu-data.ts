export const getSubmenuData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
      { next: { revalidate: 120 } }
    );

    const successfullyResponse = response.ok;
    if (!successfullyResponse) {
      throw new Error("Failed to fetch submenu data!");
    }

    return response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw Error(err.message);
    }

    throw new Error("Something wrong in data fetch!");
  }
};
