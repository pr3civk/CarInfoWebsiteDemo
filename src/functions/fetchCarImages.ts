import { PIXELS_API_KEY } from "../secret/secret.js";

export const fetchCarImages = async ({ queryKey }: any) => {
  const image = queryKey[1];
  const apiRes = await fetch(
    `https://api.pexels.com/v1/search?query=${image}/`,
    {
      headers: {
        Authorization: PIXELS_API_KEY,
      },
    },
  );
  if (!apiRes.ok) {
    throw new Error(`details/${image} fetch not ok`);
  }
  return apiRes.json();
};
