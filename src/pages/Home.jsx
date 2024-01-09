import React, { useEffect, useState } from "react";
import { styles } from "../styles";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/categoryColors.css";

import { Autoplay, Pagination } from "swiper/modules";
import { iphones, techniques } from "../assets/images";
import "../styles/swiperStyle.css";
import { Link } from "react-router-dom";
import { categoryProduct, products } from "../data/data";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    document.title = "Mene Market";
  }, []);
  console.log(categoryProduct);

  return (
    <div className={`${styles.container}`}>
      <div className="pt-12 pb-6">
        <Swiper
          pagination={true}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
          }}
          className="mySwiper bg-earth-green shadow-2xl swiper-pagination-style"
        >
          <SwiperSlide className="flex px-3 md:px-6 py-6 flex-col-reverse gap-y-10 md:justify-between md:flex-row items-center">
            <div className="flex flex-col items-center gap-y-6">
              <div className="flex flex-col gap-y-2 w-full max-w-md">
                <h2 className="text-center text-3xl font-bold text-white">
                  Bayram oldi aksiyamizda ishtirok eting
                </h2>
                <p className="text-center text-lg text-white font-medium leading-5">
                  90% gacha chegirma
                </p>
              </div>
              <button className="bg-jet-black transition-all active:bg-jet-black/80 hover:bg-jet-black/90 hover:gap-4 hover:px-5 rounded-full py-3 px-6 flex gap-2 items-center border border-jet-black">
                <p className="text-white  text-lg leading-5 font-medium">
                  Harid qilish
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M14.93 5.92999L21 12L14.93 18.07"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H20.83"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full md:max-w-xs lg:max-w-md">
              <img src={techniques} className="w-full" alt="Banner" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex px-3 md:px-6 py-6 flex-col-reverse gap-y-10 md:justify-between md:flex-row items-center">
            <div className="flex flex-col items-center gap-y-6">
              <div className="flex flex-col gap-y-2 w-full max-w-md">
                <h2 className="text-center text-3xl font-bold text-white">
                  Bayram oldi aksiyamizda ishtirok eting
                </h2>
                <p className="text-center text-lg text-white font-medium leading-5">
                  90% gacha chegirma
                </p>
              </div>
              <button className="bg-jet-black transition-all active:bg-jet-black/80 hover:bg-jet-black/90 hover:gap-4 hover:px-5 rounded-full py-3 px-6 flex gap-2 items-center border border-jet-black">
                <p className="text-white  text-lg leading-5 font-medium">
                  Harid qilish
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M14.93 5.92999L21 12L14.93 18.07"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H20.83"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full md:max-w-xs lg:max-w-md">
              <img src={iphones} className="w-full" alt="Banner" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pt-16">
        <h3 className="text-3xl font-bold">Kategoriyalar</h3>
        <ul className="flex pt-6 pb-6 overflow-auto gap-[30px] horizontal-scroll">
          {categoryProduct.map((category) => {
            return (
              <li key={category.id} className="group">
                <Link
                  to={`/${category.category}`}
                  className="flex flex-col gap-y-2 items-center"
                >
                  <div
                    className={`w-32 group-hover:bg-${category.color[0]}/50 transition-all duration-300 aspect-square rounded-full flex justify-center items-center bg-${category.color[0]}`}
                  >
                    <div
                      className={`w-24 group-hover:bg-${category.color[1]}/50 transition-all duration-300 aspect-square rounded-full flex justify-center items-center bg-${category.color[1]}`}
                    >
                      <img
                        className="transition-all duration-300 group-hover:scale-110"
                        src={category.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <h4 className="text-base leading-[164%] text-jet-black font-normal">
                    {category.category}
                  </h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-16">
        <h3 className="text-3xl font-bold">Yangi kelgan mahsulotlar</h3>
        <ul className="pt-6 pb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                rendered={setRender}
                product={product}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
