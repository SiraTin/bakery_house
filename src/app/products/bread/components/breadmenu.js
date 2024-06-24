import breadmenu from "../data/menu";


export default function Breadmenu(){

    const menuElements = breadmenu.map((menu, index) => {
        return (
            <div key={index} className="w-full min-h-[20rem] bg-slate-100 rounded-3xl p-4 cursor-pointer duration-300 hover:bg-[rgba(0,0,0,0.3)]">
                <div className={`w-full min-h-[10rem] bg-contain bg-no-repeat bg-center  ${menu.image}`}></div>
                <div className="text-black capitalize text-center">
                    <h2 className="text-xl font-playfairDisplay font-bold">{menu.name}</h2>
                    <p className="text-sm py-4 font-playfairDisplay">{menu.description}</p>
                    <h2 className="text-xl font-playfairDisplay font-bold">Price: {menu.price} Baht</h2>
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