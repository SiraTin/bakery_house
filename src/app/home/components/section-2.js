'use client'
import { useState, useEffect, useRef } from 'react';
import product from '@/app/data/ex-products';
import { register } from 'swiper/element/bundle';
import { Autoplay, Navigation } from "swiper/modules";
register();

export default function Homesecondsection(){

    //swiper custom
    const swiperRef = useRef(null);
    useEffect(()=>{
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            pagination: true,
            autoplay: true,
            breakpoints:{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 5
                  },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5
                },
            },
            injectStyles: [
                `
                    .swiper-button-next,
                    .swiper-button-prev {
                        width: 5rem;
                        color: #fff;
                        display: none;
                    }

                    .swiper-pagination-bullet{
                    width:10px;
                    height: 10px;
                    background-color: #fff;
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

    //elements
    const productElements = product.map((item, index) => {
        const imageElements = `bg-[url('/assets/home/${item.image}')]`;
        return (
            <>
                <swiper-slide>
                    <div className="w-11/12 mx-auto ">
                    <div className={`w-full h-[20rem]  text-black flex flex-col justify-center bg-cover bg-no-repeat bg-center rounded-3xl ${item.image} `}>
                        <div className="w-full h-full">
                            <a href={item.link} className="w-full text-white h-full flex flex-col justify-center text-center text-5xl font-playfairDisplay font-medium
                            hover:bg-[rgba(0,0,0,0.5)] rounded-3xl duration-300
                            ">
                                {item.name}
                            </a>
                        </div>    
                    </div>
                    </div>
                </swiper-slide>
            </>
        );
    });

    return (
        <section className="w-full min-h-screen py-10 ">
            <div className="w-11/12 mx-auto flex flex-col-reverse text-center md:flex-row md:text-left md:gap-20 md:items-center">
                <div className="w-full h-[20rem] bg-cover rounded-3xl bg-center bg-[url('/assets/home/bakery.jpg')] md:w-6/12 lg:h-[30rem]"></div>
                <div className="py-8 md:w-6/12">
                    <h2 className="text-black text-md font-bold font-parisienne lg:text-lg">Bakery Home`</h2>
                    <h2 className="text-black text-4xl my-4 font-playfairDisplay lg:text-6xl">About us</h2>
                    <p className="text-black text-sm font-playfairDisplay lg:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="my-10 md:mt-16">
                <div className="flex justify-center items-center gap-2">
                    <div className="w-4/12 h-0.5 bg-black md:w-5/12"></div>
                    <div className="text-black text-center font-parisienne font-bold">Bakery`<br/>Coffee & Tea</div>
                    <div className="w-4/12 h-0.5 bg-black md:w-5/12"></div>
                </div>
            </div>

            <div className="md:pt-8">
                <div className="w-11/12 mx-auto pb-10 text-center ">
                    <h2 className="text-black font-playfairDisplay text-4xl font-medium lg:text-5xl">Our Products</h2>
                    
                </div>
                <div className="md:w-11/12 mx-auto">
                    <swiper-container
                        navigation={true}
                        ref={swiperRef}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        init="false"
                    >
                        {productElements}
                    </swiper-container>
                    <div className="text-center my-6 ">
                    <a href="/products" className="text-black font-playfairDisplay border-b-2 border-black">See more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}