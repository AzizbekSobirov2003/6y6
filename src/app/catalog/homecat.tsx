"use client";
// compoents
import Header from "@/components/header/Header";
import Complex from "@/components/Complex";
import ChooseUs from "@/components/ChooseUs";
import Item1 from "@/app/catalog/item_1/page";
import Brands from "@/components/Brands/Brands";
import News from "@/components/News/News";
import Map from "@/components/map/Map";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/CatalogPg/Main";
import AboutCompanyCtg from "@/components/CatalogPg/AboutCompanyCtg";
// title metadata
// import { Metadata } from "next";
import { catalogDataPg } from "@/data/CatalogPgData";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Каталог",
//   description: "Generated by create next app",
// };

const Homecat = () => {
  return (
    <>
      <div className="bg-[#F8F7F3FF]">
    

          {/* Catalog components */}
<Item1/>
   

          {/* About company componets */}


          {/* Map and questions */}


          {/* SunScribe componets */}

      
      </div>
    </>
  );
};

export default Homecat;
