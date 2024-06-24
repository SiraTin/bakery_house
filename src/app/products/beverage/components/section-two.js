import beverageMenu from "../data/menu";


export default function BeverageMenu(){

    const menuElements = beverageMenu.map((item, index) => {
        return (
            <div className="bg-gray-100 p-4 rounded-3xl cursor-pointer duration-300 hover:bg-[rgba(0,0,0,0.3)]">
                <div className={`w-full h-[10rem] bg-no-repeat bg-contain bg-center ${item.image}`}></div>
                <div className="text-center">
                    <p className="text-black capitalize font-playfairDisplay font-bold text-xl">{item.name}</p>
                    <p className="text-black text-sm py-4 font-playfairDisplay text-ellipsis overflow-hidden">{item.description}</p>
                    <p className="text-black font-playfairDisplay font-bold text-lg">Price: {item.price} Baht</p>
                </div>
            </div>
        );
    });

    return (
<section className="w-full min-h-screen pt-10 lg:pt-20 py-28">
            <div className="w-11/12 mx-auto">
                <div className="flex items-center">
                    <div className="w-full h-0.5 bg-black lg:hidden"></div>
                    <div className="w-full">
                    <h2 className="text-black text-center font-parisienne font-bold text-sm">Bakery House`</h2>
                    <h2 className="text-black text-center font-playfairDisplay font-medium text-2xl lg:text-5xl ">Menu</h2>
                    </div>
                    <div className="w-full h-0.5 bg-black lg:hidden"></div>
                </div>
                <div className="pt-10 grid grid-cols-2 gap-4 lg:gap-10 lg:grid-cols-3">
                    {menuElements}
                </div>
            </div>

        </section>
    );
}