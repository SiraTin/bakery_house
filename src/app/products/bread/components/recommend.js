"use client";

import { useEffect, useRef, useState } from "react";
import { register } from 'swiper/element/bundle';
import { Autoplay, Controller, Pagination } from "swiper/modules";
import breadrecommend from "../data/breadrecommend";
import Productnav from "../../layouts/product-nav";
register();

export default function Recommendbread() {

  const [firstSwiper, setFirstSwiper] = useState(null);
  const productId = 1;

  // swiper custom
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: true,
      navigation: true,
      autoplay: true,
      loop: true,
      injectStyles: [
        `
                    .swiper-button-next,
                    .swiper-button-prev {
                        width: 5rem;
                        color: #000;
                        display: none;
                    }
                    .swiper-pagination-bullet{
                        width:10px;
                        height: 10px;
                        background-color: #000;
                        margin-top: 5rem;
                        
                    }

                    .swiper-slide{
                    border-radius: 1.5rem;
                    }

                    @media only screen and (min-width: 768px){
                        .swiper-button-next,
                        .swiper-button-prev {
                            display: block;
                        }
                        

        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, [],);

  const recommendElements = breadrecommend.map((item, index) => {
    return (
      <swiper-slide>
        <div className="lg:flex lg:justify-center lg:items-center ">
          <div className="lg:w-6/12">
            <div className={`w-[15rem] h-[15rem] bg-no-repeat bg-contain bg-center mx-auto lg:w-[25rem] lg:h-[25rem] ${item.image}`}>
            </div>
          </div>
          <div className="py-8 text-center lg:w-5/12 lg:text-left">
          <h2 className="text-black font-parisienne text-sm font-bold">
            Bakery House`
          </h2>
          <h2 className="text-black text-3xl font-playfairDisplay font-bold lg:text-6xl">
            {item.name}
          </h2>
          <p className="text-black font-playfairDisplay text-sm py-8 lg:w-7/12 px-4">
            {item.description}
          </p>
          <p className="text-black font-playfairDisplay text-xl font-bold">
            Price: <span className="text-2xl">{item.price}</span>{" "}
            <span>Baht</span>
          </p>
        </div>
        </div>
      </swiper-slide>
    );
  });

  return (
    <section className="pt-24 lg:pt-32">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-center items-center gap-2">
          <div className="w-full h-0.5 bg-black"></div>
          <div className="text-center w-full">
            <h2 className="text-black text-sm font-parisienne font-bold">
              Bakery House`
            </h2>
            <h2 className="text-black text-2xl font-playfairDisplay font-bold">
              Bread
            </h2>
          </div>
          <div className="w-full h-0.5 bg-black"></div>
        </div>
        <div>
            <Productnav productId={productId}/>
        </div>
        <div className="">
          <div>
            <h2 className="text-black text-center font-playfairDisplay font-bold pb-8 lg:w-10/12 lg:mx-auto lg:text-3xl">Recommended</h2>
            <div className="bg-[#f3dac7] rounded-3xl py-8 cursor-pointer">
            <swiper-container
                ref={swiperRef}
                init ="false"
            >
              {recommendElements}
            </swiper-container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
