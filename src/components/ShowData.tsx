import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toCapitalize } from "../functions/generalFunctions";

export const ShowData = ({ make, fuelType, classOfCar, model }: any) => {
  const [isInfoButtonHovered, setIsInfoButtonHovered] = useState(false);

  const handleOpenInfoDetails = () => {
    !isInfoButtonHovered
      ? setIsInfoButtonHovered(true)
      : setIsInfoButtonHovered(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex gap-4 ">
      <div className="border border-sky-700 rounded-md p-2 max-w-xs">
        <div
          className="flex flex-col justify-evenly"
          ref={inputRef}
          onClick={handleOpenInfoDetails}
        >
          <span className="p-2 text-xl dark:text-white text-sky-700">
            <strong>Brand:</strong>
            <span> {toCapitalize(make)}</span>
          </span>
          <span className="p-2 text-xl dark:text-white text-sky-700">
            <strong>Model:</strong>
            <span> {toCapitalize(model)}</span>
          </span>
          <span className="p-2 text-xl dark:text-white text-sky-700 ">
            <strong>Fuel type: </strong>
            <span> {fuelType}</span>
          </span>
          <span className="p-2 text-xl dark:text-white text-sky-700 ">
            <strong>Class: </strong>
            <span> {classOfCar}</span>
          </span>
        </div>
        <Link to={`/details/${model}`}>
          <button className=" inline-block p-2 mt-2 w-full border border-sky-700 rounded-md dark:text-white text-sky-700 text-lg font-bold hover:bg-sky-700 hover:text-white ease-in duration-300">
            More info
          </button>
        </Link>
      </div>
    </div>
  );
};
