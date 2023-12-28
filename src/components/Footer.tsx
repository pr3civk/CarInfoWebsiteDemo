import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 dark:bg-white min-w-full">
      <div className="ml-4 flex justify-between">
        <span className="sm:mr-4">@precivk </span>
        <Marquee className=" bg-red-500 text-white">
          Small learning app using outside API of Info and Images. Also
          implemented a lot of react hooks and "outside react hooks as useQuery
          to fetch API faster". The purpose was not to make this site nice
          looking but more learning functionality of the react and website
          itself. I used Tailwind CSS to get to know it a bit.
        </Marquee>
      </div>
    </footer>
  );
};

export default Footer;
