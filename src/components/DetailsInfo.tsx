import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "../functions/fetchCars";
import { toCapitalize, handleCopy } from "../functions/generalFunctions";
import { Loading } from "./Loading";
import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import Modal from "./Modal";
import "../styles/styles.scss";
import WishListContext from "../context/WishListContext";

export const DetailsInfo = () => {
  const { model } = useParams();
  const textToCopyRef = useRef(null);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBuyInfo, setShowBuyInfo] = useState(false);
  const navigate = useNavigate();
  const results = useQuery({
    queryKey: ["details", model],
    queryFn: fetchCars,
  });
  const [wishList, setWishList] = useContext(WishListContext);
  const carData = results.data?.[0];

  const addToWishList = () => {
    setWishList([...wishList, carData]);
    navigate("/");
  };

  useEffect(() => {
    if (showCopiedMessage) {
      const timeout = setTimeout(() => {
        setShowCopiedMessage(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showCopiedMessage]);

  if (results.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col items-center text-center border border-sky-700 rounded-md p-2 max-w-xs dark:text-white text-sky-700 ">
        <div className="flex items-center">
          <span className="text-4xl p-4 text-orange-300">
            {model?.toLocaleUpperCase()}
          </span>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShowBuyInfo(true)}
            onMouseLeave={() => setShowBuyInfo(false)}
            onClick={() => setShowModal(true)}
          >
            <FaCar size={"1.5rem"} />
            {showBuyInfo && (
              <div className="absolute left-8 bottom-0 p-1 rounded min-w-max bg-sky-700 text-white dark:bg-white dark:text-sky-700 text-nowrap">
                <span>Add car to wish list</span>
              </div>
            )}
          </div>
          {showModal && (
            <Modal>
              <div className="flex flex-col">
                <span>
                  Are you fancy having{" "}
                  <strong>
                    {toCapitalize(carData.make)} {toCapitalize(carData.model)}
                  </strong>
                  ?
                </span>
                <button
                  className="p-2 mt-2 border border-sky-700 rounded-md text-white dark:text-sky-700 text-xl font-bold
                 hover:bg-sky-700 dark:hover:text-white ease-in duration-300 "
                  onClick={addToWishList}
                >
                  Yes
                </button>
                <button
                  className="p-2 mt-2 border border-sky-700 rounded-md text-white dark:text-sky-700 text-xl font-bold
                   hover:bg-sky-700 dark:hover:text-white ease-in duration-300 "
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
              </div>
            </Modal>
          )}
        </div>

        {carData ? (
          <div
            className="flex flex-col gap-2 text-xl text-left p-4"
            ref={textToCopyRef}
          >
            <span>Brand: {toCapitalize(carData.make)}</span>
            <span>Model: {toCapitalize(carData.model)}</span>
            <span>Fuel Type: {carData.fuel_type}</span>
            <span>Drive: {carData.drive}</span>
            <span>Amount of cylindres: {carData.cylinders}</span>
            <span>Transmission: {carData.transmission}</span>
            <span>Year of the very first model: {carData.year}</span>
            <span>Class: {carData.class}</span>
            <span>Highway MPG: {carData.highway_mpg}</span>
            <span>Displacement: {carData.displacement}</span>
          </div>
        ) : (
          <span>NO SPECIFIED DATA</span>
        )}
        <div className="flex gap-4">
          <Link to="/">
            <button className=" p-2 mt-2 border border-sky-700 rounded-md dark:text-white text-sky-700 text-xl font-bold hover:bg-sky-700 hover:text-white ease-in duration-300 ">
              Home
            </button>
          </Link>
          <button
            className="p-2 mt-2  border border-sky-700 rounded-md dark:text-white text-sky-700 text-lg font-bold hover:bg-sky-700 hover:text-white ease-in duration-300"
            onClick={() => {
              handleCopy(textToCopyRef.current);
              setShowCopiedMessage(true);
            }}
          >
            Copy
          </button>
        </div>
      </div>
      {showCopiedMessage && (
        <div className="fixed top-3 right-3 bg-[#0364a1c0] dark:bg-[#ffffffc0] animate-bounce text-white dark:text-sky-700 text-2xl rounded">
          <span className="p-4">Text has been copied</span>
        </div>
      )}
    </>
  );
};
