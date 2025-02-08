import DeliveryDetails from "./delivery-details";
import DeliveryPath from "./delivery-path";
import DeliveryProducts from "./delivery-products";
function DeliveryInfo() {
  return (
    <div className="py-7 text-[#3C3C3C] px-4 lg:px-8 mt-6 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4  bg-white rounded-3xl border-solid border-[2px] border-[#F4F2F2]">
      <DeliveryDetails />
      <DeliveryPath />
      <DeliveryProducts />
    </div>
  );
}

export default DeliveryInfo;
