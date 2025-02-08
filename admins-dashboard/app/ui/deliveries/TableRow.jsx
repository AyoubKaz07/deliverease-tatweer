import Checkbox from "@mui/material/Checkbox";
import DeliveryStatus from "./status";
import { UpdateDelivery, DeleteDelivery } from "./buttons";

import clsx from "clsx";
import { useMemo } from "react";

function TableRow({ driver, checkedRows, setCheckedRows }) {
  const isChecked = useMemo(() => {
    return checkedRows.find((a) => a.id == driver.id).isChecked;
  }, [checkedRows]);
  function handleCheckClick(e) {
    const table = [...checkedRows].map((a) => {
      if (a.id === driver.id) {
        return { ...a, isChecked: e.target.checked };
      } else return a;
    });
    setCheckedRows(table);
  }

  return (
    <tr
      style={{ transition: "all ease .2s" }}
      className={clsx("group  rounded-3xl cursor-pointer  hover:bg-[#e2ecff]", {
        "bg-[#e2ecff]": isChecked == true,
        "bg-white": isChecked == false,
      })}
    >
      <td
        className={clsx(
          "whitespace-nowrap  py-2 px-4  text-sm text-black group-first-of-type:rounded-tl-[32px] group-last-of-type:rounded-bl-[32px]   "
        )}
      >
        <div className="flex items-center gap-1">
          <Checkbox
            checked={isChecked}
            onChange={handleCheckClick}
            style={{ flexShrink: "0" }}
          />
          <p className="font-semibold text-sm">12345</p>
        </div>
      </td>
      <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm">
        <DeliveryStatus
          status={
            ["completed", "pending", "canceled", "In-Transit"][driver.id % 4]
          }
        />
      </td>
      <td className="whitespace-nowrap leading-5 font-semibold px-4 py-2 text-sm">
        Amro
      </td>
      <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm">
        0673455258
      </td>
      <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-md ">
        Bechar, Algeria
      </td>
      <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-md ">
        Bechar, Algeria
      </td>
      <td className="whitespace-nowrap  leading-5 font-semibold  px-4 py-2 text-sm">
        22/08/2024
      </td>
      <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-tr-[32px] group-last-of-type:rounded-br-[32px]">
        <div className="flex gap-1 items-center">
          <DeleteDelivery />
          <UpdateDelivery />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
