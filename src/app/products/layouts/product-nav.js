

export default function Productnav(props){
    const {productId} = props;

    return (
      <div>
        <ul className="flex justify-center gap-3 py-4 sm:gap-4">
          <li>
            <a
              href="bread"
              className={`text-black rounded-3xl py-1 font-playfairDisplay text-sm font-medium relative z-20 duration-300
                hover:text-white hover:bg-black hover:px-2
                ${(productId == 1) ? "text-white bg-black px-2":""}`}
            >
              Bread
            </a>
          </li>
          <li>
            <a
              href="cake"
              className={`text-black rounded-3xl py-1 font-playfairDisplay text-sm font-medium duration-300
                hover:text-white hover:bg-black hover:px-2
                ${(productId == 2) ? "text-white bg-black px-2":""}`}
            >
              Cake
            </a>
          </li>
          <li>
            <a
              href="cookie"
              className={`text-black rounded-3xl py-1 font-playfairDisplay text-sm font-medium duration-300
                hover:text-white hover:bg-black hover:px-2
                ${(productId == 3) ? "text-white bg-black px-2":""}`}
            >
              Cookie
            </a>
          </li>
          <li>
            <a
              href="coffeeTea"
              className={`text-black rounded-3xl py-1 font-playfairDisplay text-sm font-medium duration-300
                hover:text-white hover:bg-black hover:px-2
                ${(productId == 4) ? "text-white bg-black px-2":""}`}
            >
              Coffee & Tea
            </a>
          </li>
          <li>
            <a
              href="beverage"
              className={`text-black rounded-3xl py-1 font-playfairDisplay text-sm font-medium duration-300
                hover:text-white hover:bg-black hover:px-2
                ${(productId == 5) ? "text-white bg-black px-2":""}`}
            >
              Beverage
            </a>
          </li>
        </ul>
      </div>
    );
}