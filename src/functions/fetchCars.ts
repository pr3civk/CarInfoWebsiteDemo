import { NINJA_API } from "../secret/secret.js";

export const fetchCars = async ({ queryKey }: any) => {
  const car = queryKey[1];
  const apiRes = await fetch(
    `https://api.api-ninjas.com/v1/cars?limit=2&model=${car}`,
    {
      headers: {
        "X-Api-Key": NINJA_API,
      },
    },
  );
  if (!apiRes.ok) {
    throw new Error(`details/${car} fetch not ok`);
  }
  return apiRes.json();
};
