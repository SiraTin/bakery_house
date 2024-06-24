
import { Lazy } from "swiper/modules";



export default function Productsection() {
  return (
    <section className="pb-10 ">
      <div className="w-11/12 mx-auto flex justify-between items-center py-10">
        <div className="w-4/12 h-0.5 bg-black"></div>
        <div className="w-4/12 text-center">
          <h2 className="text-black text-sm font-parisienne font-bold">
            Bakery House`
          </h2>
          <h2 className="text-black text-2xl font-playfairDisplay font-bold">
            Products
          </h2>
        </div>
        <div className="w-4/12 h-0.5 bg-black"></div>
      </div>
      <div loading="lazy" className="w-11/12 mx-auto flex flex-col gap-10 lg:flex-row lg:pb-20">
        <div className="w-full h-[30vh] lg:h-[80vh] bg-cover bg-no-repeat bg-center rounded-3xl bg-[url('/assets/products/bread.png')] duration-500 hover:bg-top lg:hover:bg-right">
          <a
            href="products/bread"
            className="flex flex-col justify-center text-4xl text-white text-center w-full h-full font-playfairDisplay hover:bg-[rgba(0,0,0,0.5)] duration-300 rounded-3xl"
          >
            Bread
          </a>
        </div>
        <div loading="lazy" className="w-full h-[30vh] lg:h-[80vh] bg-cover bg-no-repeat bg-center rounded-3xl bg-[url('/assets/products/cake.png')] duration-500 hover:bg-top lg:hover:bg-right">
          <a
            href="products/cake"
            className="flex flex-col justify-center text-4xl text-white text-center w-full h-full font-playfairDisplay hover:bg-[rgba(0,0,0,0.5)] duration-300 rounded-3xl"
          >
            Cake
          </a>
        </div>
        <div loading="lazy" className="w-full h-[30vh] lg:h-[80vh] bg-cover bg-no-repeat bg-center rounded-3xl bg-[url('/assets/products/cookie.png')] duration-500 hover:bg-top lg:hover:bg-right">
          <a
            href="products/cookie"
            className="flex flex-col justify-center text-4xl text-white text-center w-full h-full font-playfairDisplay hover:bg-[rgba(0,0,0,0.5)] duration-300 rounded-3xl"
          >
            Cookie
          </a>
        </div>
        <div loading="lazy" className="w-full h-[30vh] lg:h-[80vh] bg-cover bg-no-repeat bg-center rounded-3xl bg-[url('/assets/products/coffee.png')] duration-500 hover:bg-top lg:hover:bg-right">
          <a
            href="products/coffeeTea"
            className="flex flex-col justify-center text-4xl text-white text-center w-full h-full font-playfairDisplay hover:bg-[rgba(0,0,0,0.5)] duration-300 rounded-3xl"
          >
            Coffee & Tea
          </a>
        </div>
        <div loading="lazy" className="w-full h-[30vh] lg:h-[80vh] bg-cover bg-no-repeat bg-center rounded-3xl bg-[url('/assets/products/beverage.png')] duration-500 hover:bg-top lg:hover:bg-right">
          <a
            href="products/beverage"
            className="flex flex-col justify-center text-4xl text-white text-center w-full h-full font-playfairDisplay hover:bg-[rgba(0,0,0,0.5)] duration-300 rounded-3xl"
          >
            Beverage
          </a>
        </div>
      </div>
    </section>
  );
}
