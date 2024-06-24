"use client";

import { useState } from "react";
import { faAngleUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Footer() {

    const [isClick, setIsClick] = useState(null);
    const onClick = () => {
        setIsClick(!isClick);
    }
    const [isClick2, setIsClick2] = useState(null);
    const onClick2 = () => {
        setIsClick2(!isClick2);
    }

  return (
    <footer className="w-full h-full bg-[#f3dac7] py-8" id="footer">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div className="pb-8">
          <h2 className="text-black font-parisienne font-bold text-2xl text-center lg:text-left">Bakery House`</h2>
          <p className="text-black text-sm pt-4 text-center font-playfairDisplay lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="lg:flex lg:gap-10">
          <div>
            <div onClick={onClick} className={`flex justify-between items-center cursor-pointer `}>
              <h2 className="text-black pb-2 font-playfairDisplay">About us</h2>
              <div className="lg:hidden">
                <FontAwesomeIcon icon={faAngleUp} className={`text-black duration-300 ${isClick ? "rotate-180":"" }`} />
              </div>
            </div>

            <ul className={`${isClick ? "h-28 opacity-1" : "overflow-y-hidden h-0 opacity-0 lg:opacity-100"} w-full duration-300 bg-[#f3dac7] lg:h-28 `}>
              <li>
                <a href="#" className="block text-black text-sm py-2 px-4 font-playfairDisplay rounded-3xl hover:bg-black hover:text-white ">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="block text-black text-sm py-2 px-4 font-playfairDisplay rounded-3xl hover:bg-black hover:text-white ">
                  Review
                </a>
              </li>
              <li>
                <a href="#" className="block text-black text-sm py-2 px-4 font-playfairDisplay rounded-3xl hover:bg-black hover:text-white ">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:mt-0">
            <div onClick={onClick2} className="flex justify-between items-center cursor-pointer">
              <h2 className="text-black pb-2 font-playfairDisplay">Further infomation</h2>
              <div className="lg:hidden">
                <FontAwesomeIcon icon={faAngleUp} className={`text-black duration-300 ${isClick2 ? "rotate-180" : ""} `} />
              </div>
            </div>

            <ul className={`${isClick2 ? "h-28 opacity-1" : "overflow-y-hidden h-0 opacity-0 lg:opacity-100"} w-full duration-300 bg-[#f3dac7] lg:h-28`}>
              <li>
                <a href="#" className="block text-black text-sm py-2 px-4 rounded-3xl hover:bg-black hover:text-white font-playfairDisplay">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="block text-black text-sm py-2 px-4 rounded-3xl hover:bg-black hover:text-white font-playfairDisplay">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto py-4">
        <div className="w-full h-0.5 bg-black"></div>
        <div className="flex justify-between items-center py-4">
            <div>
                <p className="text-black font-playfairDisplay">Copyright © 2024</p>
            </div>
            <div className="flex gap-2">
                <a href="#"><FontAwesomeIcon icon={faFacebookSquare} className="block text-black text-2xl"/></a>
                <a href="#"><FontAwesomeIcon icon={faInstagramSquare} className="block text-black text-2xl"/></a>
                <a href="#"><FontAwesomeIcon icon={faXTwitter} className="block text-black text-2xl"/></a>
                
               
                
            </div>
        </div>
      </div>
    </footer>
  );
}
