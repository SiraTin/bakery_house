'use client'

import instragrams from "@/app/data/instragram";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Homethirdsection(){

    const instragramElements = instragrams.map((item, index) => {
        return (
            // <div loading="lazy" className={`w-[10rem] h-[10rem] bg-cover bg-center bg-no-repeat ${item.image} text-black`}></div>
            <div>
                <div className={`w-[10rem] h-[10rem] rounded-3xl bg-center bg-cover bg-no-repeat ${item.image}`} alt={item.name}/>
            </div>
        );
    })

    return (
        <section className="w-full h-full py-10 pb-16">
            <div className="w-11/12 mx-auto">
                <div className="text-center">
                    <h2 className="text-black font-parisienne text-lg font-bold">Reviews</h2>
                <h2 className="text-black font-playfairDisplay font-medium text-4xl">Instragram</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-5 py-10 ">
                    {instragramElements}
                </div>
            </div>
        </section>
    );
}