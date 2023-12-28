import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "../functions/fetchCars";

const useCarData = (car: string) => {
  const results = useQuery({
    queryKey: ["cars", car],
    queryFn: fetchCars,
  });
  return [results.data?.[0] ?? [], results.status];
};

export default useCarData;
