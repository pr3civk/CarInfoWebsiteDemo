import { useState, useRef, useEffect } from "react";
import { ShowData } from "./ShowData";
import { toCapitalize } from "../functions/generalFunctions";
import useCarData from "../hooks/useCarData";
import useImageCarData from "../hooks/useImageCarData";
import { Loading } from "./Loading";
import ImageSlider from "./ImageSlider";

export const SearchParams = () => {
  const [car, setCar] = useState("Camry");
  const [location, setLocation] = useState("");
  const [label, setLabel] = useState("Camry");
  const carData = useCarData(car);
  const carImage = useImageCarData(car);

  useEffect(() => {
    setLabel(
      carData &&
        `${toCapitalize(carData[0].make)} ${toCapitalize(carData[0].model)}`,
    );
  }, [carData]);

  const inputRef = useRef<HTMLInputElement>(null);

  if (carData[1] === "pending" || carImage[1] === "pending") {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-4">
        <ImageSlider carImage={carImage} />
      </div>
      <div className="flex md:flex-row sm:flex-col gap-4 items-center">
        <div className="flex flex-col justify-between border border-sky-700 rounded-md p-2 max-w-xs ">
          <div className="flex flex-col gap-4">
            <label
              className="p-2 text-xl dark:text-white text-sky-700 font-bold "
              htmlFor="location"
            >
              {label}
            </label>
            <input
              onChange={(event) => setLocation(event.target.value)}
              className="p-2 text-xl  text-sky-700 bg-slate-100 rounded-md border border-sky-700"
              id="location"
              value={location.slice(0, 20)}
              placeholder="Model"
              ref={inputRef}
            />
            <span className="text-right p-2 text-2xl dark:text-white text-sky-700">
              {location.length < 20 ? location.length : 20}/20{" "}
            </span>
          </div>

          <button
            onClick={() => {
              if (inputRef.current) {
                setCar(inputRef.current.value);
              }
              setLocation("");
            }}
            className="p-2 mt-2 border border-sky-700 rounded-md dark:text-white text-sky-700 text-xl font-bold hover:bg-sky-700 hover:text-white ease-in duration-300 "
          >
            Submit
          </button>
        </div>
        {carData && (
          <ShowData
            make={carData[0].make}
            model={carData[0].model}
            fuelType={carData[0].fuel_type}
            classOfCar={carData[0].class}
          />
        )}
      </div>
    </div>
  );
};
