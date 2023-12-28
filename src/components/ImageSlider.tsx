import { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../styles/styles.scss";

type PhotoData = any;

const ImageSlider = ({ carImage }: PhotoData) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleSubstractIndex = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = (prevIndex - 1) % carImage[0].photos.length;
      return newIndex < 0 ? carImage[0].photos.length - 1 : newIndex;
    });
  };
  const toggleAddIndex = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carImage[0].photos.length);
  };

  return (
    <div>
      <div className="flex gap-4 items-center text-sky-700 dark:text-white">
        <div
          className="cursor-pointer rounded-full "
          onClick={toggleSubstractIndex}
        >
          <FaRegArrowAltCircleLeft size="3rem" />
        </div>

        <img
          src={carImage[0].photos[activeIndex].src.original}
          alt={carImage[0].photos[activeIndex].id}
          className=" max-h-[20rem] max-w-[20rem] rounded border border-sky-700 slide-in-left "
        />
        <div className=" cursor-pointer rounded-full" onClick={toggleAddIndex}>
          <FaRegArrowAltCircleRight size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
