"use client";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function BakeryMap() {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100%",
    height: "60vh",
    borderRadius: "1.5rem"
  };
  const center = {
    lat: 18.805608, // default latitude
    lng: 98.950939, // default longitude
  };

  const App = () => {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: "AIzaSyDdToyXLeugZudfpPhLHsOEsc8aopusefY",
      libraries,
    });

    if (loadError) {
      return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
      return <div>Loading maps</div>;
    }

    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={16}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    );
  };

  return( 
  <section className="text-black py-28">
        <div className="w-11/12 mx-auto ">
        <div className="flex justify-center items-center py-8">
            <div className="w-full h-0.5 bg-black"></div>
            <div className="w-full text-center">
                <h2 className="text-black text-sm font-parisienne font-bold">Bakery House`</h2>
                <h2 className="text-black text-2xl font-playfairDisplay font-bold">Contact us</h2>
            </div>
            <div className="w-full h-0.5 bg-black"></div>
        </div>
        <div className="">
        <div className="w-full text-center pb-10">
                <h2 className="font-playfairDisplay font-bold text-2xl lg:text-3xl">Location Bakery House`</h2>
                <p className="py-4 font-playfairDisplay font-normal lg:text-xl"><span className="font-bold">Address:</span> 123/1 Village No.1, Sutep Sub-district, Muang District, Chiang Mai, 50000</p>
                <p className="font-playfairDisplay font-normal lg:text-xl"><span className="font-bold">Tel:</span> 08x-xxx-xxxx or 054-xxx-xxx</p>
            </div>
            <div className="w-full">{App()}</div>

        </div>
        </div>
  </section>);
}
