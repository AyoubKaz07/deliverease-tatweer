import clsx from "clsx";

export default function DeliveryStatus({ status }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 justify-center w-24 h-6  rounded-2xl",
        {
          "bg-[rgba(230,230,255,1)]": status == "In-Transit",
          "bg-[#FEF9C3]": status == "pending",
          "bg-[#FEE2E2]": status == "canceled",
          "bg-[#DCFCE7]" : status=="completed"
        }
      )}
    >
      <svg
        className={clsx( {
          "fill-[#FFE900]": status === "pending",
          "fill-[#FF2020]": status === "canceled",
          "fill-[#B2B2FF]": status === "In-Transit",
          "fill-[#22C55E]" : status=="completed"
        })}
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
      >
        <circle cx="4" cy="4" r="4" />
      </svg>
      <span
        className={clsx(
          "shrink-0 capitalize text-xs font-medium  ",
          {
            "text-[#713F12]": status === "pending",
            "text-[#7F1D1D]": status === "canceled",
            "text-[#14532D]": status === "In-Transit",
            "text-[#14532D]" : status=="completed"
          }
        )}
      >
        {status}
      </span>
    </div>
  );
}
