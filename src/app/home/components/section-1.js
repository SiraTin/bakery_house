'use client'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Homefirstsection(){
    return (
        <section className="w-full mx-auto min-h-screen ">
            <div className="w-11/12 mx-auto h-full pt-20">
                <div className="w-full h-[85vh] flex flex-col justify-center z-10 rounded-3xl relative bg-cover bg-center grayscale-[10%] bg-no-repeat bg-[url('/assets/home/background.png')]">
                    <div className="text-center py-20 px-8">
                    <h2 className="text-xl text-white font-parisienne font-medium md:text-3xl lg:text-4xl">Bakery House`<br/></h2>
                    <h2 className="text-5xl text-white my-8 font-playfairDisplay md:text-6xl lg:text-7xl">Bakery Shop</h2>
                    <p className="text-sm text-white font-playfairDisplay md:text-xl lg:w-7/12 lg:mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="mt-8 w-6/12 mx-auto relative z-20 bg-white rounded-3xl lg:w-2/12 before:content-[''] before:w-0 before:h-full before:absolute before:left-0 before:bg-black before:z-10 before:rounded-3xl before:duration-300 hover:before:w-full ">
                        <a href="/products" className="block p-2 lg:p-3 relative z-20 font-playfairDisplay font-medium duration-300 text-black hover:text-white ">See our products</a>
                    </div>
                    </div>
                <div className="w-20 h-20 lg:w-36 lg:h-36 z-20 flex flex-col justify-center bg-white absolute rounded-full bottom-[-6%] lg:bottom-[-12%] mx-auto right-0 left-0">
                    <FontAwesomeIcon icon={faArrowDown} className="text-black text-xl animate-bounce lg:text-3xl"/>
                </div>
                </div>
            </div>
        </section>
    );
}