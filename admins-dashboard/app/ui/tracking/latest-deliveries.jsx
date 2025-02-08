"use client";
import "./latest-deliveries.css"
import { useState } from "react";
import DeliveryBox from "./delivery-box";
function LatestDeliveries() {
  const [selected, setSelected] = useState(0);
  return (
    <div id="tracking-latest-deliveries"  className="overflow-y-scroll grow pr-4 mt-3">
      {[...Array(8)].map((_, index) => (
        <DeliveryBox
          selected={selected}
          setSelected={setSelected}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}

export default LatestDeliveries;
