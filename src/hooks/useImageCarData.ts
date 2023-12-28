import { useQuery } from "@tanstack/react-query";
import { fetchCarImages } from "../functions/fetchCarImages";

const useImageCarData = (carImage: string) => {
  const results = useQuery({
    queryKey: ["carsImage", carImage],
    queryFn: fetchCarImages,
  });
  return [results.data ?? [], results.status];
};

export default useImageCarData;
