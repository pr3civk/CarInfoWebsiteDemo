/* eslint-disable */
import { DetailsInfo } from "./components/DetailsInfo";
import { SearchParams } from "./components/SearchParams";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WishListDropDown } from "./components/WishListDropDown";
import { useState } from "react";
import WishListContext from "./context/WishListContext";
import Footer from "./components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  const [wishList, setWishList] = useState([]);
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <WishListContext.Provider value={[wishList, setWishList]}>
            <div className="flex flex-col items-center p-5 dark:bg-indigo-950 bg-slate-100 min-h-screen min-w-screen ">
              <h1 className="mb-6 xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-sky-700 dark:text-white text-nowrap">
                Car Info Website
              </h1>
              <WishListDropDown />
              <h2 className="mb-3 xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sky-700 dark:text-white">
                Type a model of the car to find out info about one!
              </h2>
              <ThemeSwitcher />
              <Routes>
                <Route path="/" element={<SearchParams />} />

                <Route path="/details/:model" element={<DetailsInfo />} />
              </Routes>
              <Footer />
            </div>
          </WishListContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
