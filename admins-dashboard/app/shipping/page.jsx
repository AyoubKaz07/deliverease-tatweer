import { poppins } from "../ui/fonts";
import Ships from "../ui/shipping/Ships";
import MapCart from "../ui/shipping/map-cart";

import DeliverySelection from "../ui/shipping/delivery-selection";
import CompatibleTrucks from "../ui/shipping/compatible-trucks";
// import "./page.css";
export default async function Page() {
  return (
    <div
      className={`grid w-full gap-x-10 grid-cols-[1fr] h-full  md:grid-cols-[400px_auto] ${poppins.className} `}
    >
      <Ships />

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-3">
          <DeliverySelection />
          <MapCart />
        </div>
        <CompatibleTrucks />
      </div>
    </div>
  );
}
