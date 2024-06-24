"use client";

import { useState, useEffect } from "react";
import {
  faSquareFacebook,
  faInstagramSquare,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Navbar(props) {
  const { pageId } = props;
  const [toggle, setToggle] = useState(null);
  const onClick = () => {
    setToggle(!toggle);
  };

  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });
  }, []);

  const scroll_value = Math.ceil(scrollValue / 100);
  let isScroll;

  if (scroll_value > 0) {
    isScroll = true;
  } else {
    isScroll = false;
  }

  return (
    <header
      className={`fixed w-full h-auto z-50 duration-300 ${
        isScroll ? "bg-white shadow-lg" : ""
      }`}
    >
      <nav className="w-11/12 mx-auto py-6 flex justify-between items-center">
        <div className="text-black font-parisienne text-2xl font-bold">
          <a href="/">Bakery House`</a>
        </div>
        <ul className="hidden md:flex md:items-center md:gap-5">
          <li>
            <a
              href="/"
              className={`text-black font-playfairDisplay font-medium after:content-[''] after:w-0 after:block after:duration-300 after:bg-black after:h-0.5 hover:after:w-full ${(pageId == 1) ? "after:w-full" : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/products"
              className={`text-black font-playfairDisplay font-medium after:content-[''] after:w-0 after:block after:duration-300 after:bg-black after:h-0.5 hover:after:w-full  ${(pageId == 2) ? "after:w-full" : ""}`}
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="/reviews"
              className={`text-black font-playfairDisplay font-medium after:content-[''] after:w-0 after:block after:duration-300 after:bg-black after:h-0.5 hover:after:w-full  ${(pageId == 3) ? "after:w-full" : ""}`}
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="/location"
              className={`text-black font-playfairDisplay font-medium after:content-[''] after:w-0 after:block after:duration-300 after:bg-black after:h-0.5 hover:after:w-full  ${(pageId == 4) ? "after:w-full" : ""}`}
            >
              Contact us
            </a>
          </li>
        </ul>
        <div className="items-center gap-2 hidden md:flex ">
          <h2 className="text-black font-playfairDisplay font-medium">
            Follow us:
          </h2>
          <div className="text-black flex gap-3">
            <a href="#">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="block text-black text-xl"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="block text-black text-xl"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="block text-black text-xl"
              />
            </a>
          </div>
        </div>

        {/* bars */}
        <div
          onClick={onClick}
          className={`relative z-50 ${toggle ? "hidden" : "block "} md:hidden`}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-black cursor-pointer text-xl"
          />
        </div>
        <div
          onClick={onClick}
          className={`relative z-50 ${toggle ? "block" : "hidden"} `}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-black cursor-pointer text-xl"
          />
        </div>

        {/* responsive nav */}
        <div
          className={`absolute top-0 w-full z-40 shadow-xl bg-white h-screen duration-300 ${
            toggle ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="pt-16 text-center">
            <h2 className="text-black font-parisienne text-xl font-bold">
              Bakery House`
            </h2>
            <li className={`mt-4 relative before:content-[''] z-50 before:w-0 before:h-full before:absolute before:left-0 before:z-40  before:bg-black before:duration-300 hover:before:w-full ${(pageId == 1) ? "before:w-full " : ""}`}>
              <a
                href="/"
                className={`text-black font-playfairDisplay font-medium block relative z-50 duration-300 hover:text-white py-2 ${(pageId == 1) ? "text-white " : ""}`}
              >
                Home
              </a>
            </li>
            <li className={`my-2 relative before:content-[''] z-50 before:w-0 before:h-full before:absolute before:left-0 before:z-40  before:bg-black before:duration-300 hover:before:w-full ${(pageId == 2) ? "before:w-full " : ""}`}>
              <a
                href="/products"
                className={`text-black font-playfairDisplay font-medium block relative z-50 duration-300 hover:text-white py-2 ${(pageId == 2) ? "text-white " : ""}`}
              >
                Product
              </a>
            </li>
            <li className={`my-2 relative before:content-[''] z-50 before:w-0 before:h-full before:absolute before:left-0 before:z-40  before:bg-black before:duration-300 hover:before:w-full ${(pageId == 3) ? "before:w-full " : ""}`}>
              <a
                href="/reviews"
                className={`text-black font-playfairDisplay font-medium block relative z-50 duration-300 hover:text-white py-2 ${(pageId == 3) ? "text-white " : ""}`}
              >
                Reviews
              </a>
            </li>
            <li className={`my-2 relative before:content-[''] z-50 before:w-0 before:h-full before:absolute before:left-0 before:z-40  before:bg-black before:duration-300 hover:before:w-full ${(pageId == 4) ? "before:w-full " : ""}`}>
              <a
                href="/location"
                className={`text-black font-playfairDisplay font-medium block relative z-50 duration-300 hover:text-white py-2 ${(pageId == 4) ? "text-white " : ""}`}
              >
                Contact us
              </a>
            </li>
          </ul>
          <div className="items-center gap-2 flex justify-center">
            <h2 className="text-black font-playfairDisplay font-medium">
              Follow us:
            </h2>
            <div className="text-black flex gap-3">
              <a href="#">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="block text-2xl text-black"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="block text-2xl text-black"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="block text-2xl text-black"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
