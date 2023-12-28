import { BsVignette } from "react-icons/bs";
import "../styles/styles.scss";

export const Loading = () => {
  return (
    <div className="flex gap-16">
      <BsVignette className="animate-spin mt-20 dark:text-white text-[8rem] text-sky-700" />
      <BsVignette className="animate-spin mt-20 dark:text-white text-[8rem] text-sky-700" />
    </div>
  );
};
