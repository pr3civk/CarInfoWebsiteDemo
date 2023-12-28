import WishListContext from "../context/WishListContext";
import { useContext } from "react";
import { toCapitalize } from "../functions/generalFunctions";

export const WishListDropDown = () => {
  const [wishList]: { make: string; model: string }[] =
    useContext(WishListContext);
  return (
    <div className="absolute left-4 p-4 bg-sky-700 dark:bg-[#ffffffed] text-white dark:text-sky-700 z-10 min-w-max text-xl rounded">
      <strong>Your dream cars:</strong>
      {Array.isArray(wishList) && wishList.length === 0 ? (
        <h2>No car starred</h2>
      ) : (
        Array.isArray(wishList) &&
        wishList.map((car, index) => (
          <li key={index}>
            {toCapitalize(car.make)} {toCapitalize(car.model)}
          </li>
        ))
      )}
    </div>
  );
};
