"use client";

import { useEffect, useRef } from "react";
import Productnav from "../../layouts/product-nav";
import cookie_recommend from "../data/recommend";
import { register } from "swiper/element/bundle";


export default function Cookierecommend() {
    const productId = 3;

      
  // swiper custom
  const swiperRef = useRef(null);
  useEffect(() => {
    register();
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

    const recommendElements = cookie_recommend.map((item, index) => {
    return (
      <swiper-slide>
        <div className="px-4 pt-2 pb-14 cursor-pointer lg:flex lg:gap-10 lg:justify-center lg:items-center">
          <div className="w-full h-[15rem] lg:h-[25rem] lg:w-6/12">
            <div className={`w-full h-full bg-contain bg-no-repeat bg-center ${item.image}`}></div>
          </div>
          <div className="text-center lg:text-left lg:w-6/12">
            <h2 className="text-black text-sm font-parisienne font-bold">Bakery House`</h2>
            <h2 className="text-black text-2xl font-playfairDisplay font-bold capitalize lg:text-5xl">{item.name}</h2>
            <p className="text-black text-sm py-4 lg:w-8/12">{item.description}</p>
            <h2 className="text-black text-xl font-playfairDisplay font-bold lg:text-2xl">Price: {item.price} Baht</h2>
          </div>
        </div>
      </swiper-slide>
    );
  });
  return (
    <section className="pt-24 lg:pt-32">
        <div className="w-11/12 mx-auto">
        <div className="flex items-center">
            <div className="w-full h-0.5 bg-black"></div>
            <div className="w-full text-center">
                <h2 className="text-black font-parisienne text-sm font-bold">Bakery House`</h2>
                <h2 className="text-black font-playfairDisplay text-2xl font-bold">Cookie</h2>
            </div>
            <div className="w-full h-0.5 bg-black"></div>
        </div>
        <Productnav productId={productId}/>
        <h2 className="text-black text-center font-playfairDisplay font-bold pb-8 lg:w-10/12 lg:mx-auto lg:text-3xl">Recommended</h2>
      <div className="bg-orange-200 rounded-3xl">
        <swiper-container ref={swiperRef} init={false}>{recommendElements}</swiper-container>
        <div></div>
      </div>
        </div>

    </section>
  );
}
