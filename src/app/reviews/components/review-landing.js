"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ReviewSection() {
  return (
    <section className="pt-28">
      <div className="my-4 md:mt-4">
        <div className="flex justify-center items-center gap-2">
          <div className="w-4/12 h-0.5 bg-black md:w-5/12"></div>
          <div className="text-black text-center font-bold">
            <h2 className="font-parisienne">Bakery House`</h2>
            <span className="font-playfairDisplay text-2xl ">Reviews</span>
          </div>
          <div className="w-4/12 h-0.5 bg-black md:w-5/12"></div>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col gap-10 justify-center pb-8 pt-4 lg:flex-row">
        <div className="w-full h-full hover:bg-blue-600 text-black py-4 rounded-3xl hover:text-white duration-300 lg:h-[60vh]">
          <a href="#" className="text-center w-full h-full flex flex-col justify-center">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="block w-full text-[5rem] mx-auto"
            />
            <span className="block pt-4 text-4xl font-playfairDisplay font-bold ">
              Facebook
            </span>
          </a>
        </div>

        <div className="w-full h-full hover:bg-blue-600 text-black py-4 rounded-3xl hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:text-white duration-300 lg:h-[60vh]">
          <a href="#" className="text-center w-full h-full flex flex-col justify-center">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="block w-full text-[5rem] mx-auto"
            />
            <span className="pt-4 text-4xl block font-playfairDisplay font-bold">
              Instragram
            </span>
          </a>
        </div>
        <div className="w-full h-full text-black py-4 rounded-3xl hover:bg-black hover:text-white duration-300 lg:h-[60vh]">
          <a href="#" className="text-center w-full h-full flex flex-col justify-center">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="block w-full text-[5rem] mx-auto"
            />
            <span className="pt-4 text-4xl block font-playfairDisplay font-bold">
              X / Twitter
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
