"use client";
import DeliveryStatus from "./status";
import clsx from "clsx";
import TableRow from "./TableRow";
import { DeleteAllDeliveries, DeleteDelivery, UpdateDelivery } from "./buttons";
import { useCallback, useMemo, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

function Table() {
  const [checkedRows, setCheckedRows] = useState(
    [...Array(10)].map((_, index) => {
      return {
        id: index,
        isChecked: false,
      };
    })
  );

  const isChecked = useMemo(() => {
    return checkedRows.every((a) => a.isChecked);
  }, [checkedRows]);

  const indeterminate = useMemo(() => {
    return !isChecked && checkedRows.some((a) => a.isChecked);
  }, [checkedRows]);

  const handleCheckClick = useCallback(
    (e) => {
      if (e.target.checked) {
        setCheckedRows(
          [...checkedRows].map((a) => {
            return { ...a, isChecked: true };
          })
        );
      } else {
        setCheckedRows(
          [...checkedRows].map((a) => {
            return { ...a, isChecked: false };
          })
        );
      }
    },
    [isChecked]
  );

  return (
    <div className="mt-1 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md bg-gray-50 py-2 md:pt-0">
            <div className="md:hidden">
              {[...Array(5)]?.map((_, index) => (
                <div
                  key={index}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2">
                        <p>12345</p>
                      </div>
                      <p className="text-sm text-gray-500">bilal</p>
                    </div>
                    <DeliveryStatus status={"completed"} />
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">abass</p>
                      <p>22/08/2024</p>
                    </div>
                    <div className="flex justify-end">
                      <DeleteDelivery />
                      <UpdateDelivery />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table
              style={{ tableLayout: "fixed" }}
              className="hidden min-w-full mt-2 rounded-md text-gray-900 md:table"
            >
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col width={100} />
              </colgroup>
              <thead className="rounded-md  text-left text-sm font-normal">
                <tr>
                  <th
                    scope="col"
                    className={clsx(
                      "px-4 py-1  text-[#667085] text-xs font-medium leading-4"
                    )}
                  >
                    <div className="flex items-center gap-1">
                      <Checkbox
                        indeterminate={indeterminate}
                        checked={isChecked}
                        onChange={handleCheckClick}
                        style={{ flexShrink: "0" }}
                      />
                      ID
                    </div>
                  </th>
                  {[
                    "Status",
                    "Driver",
                    "Client Phone",
                    "Pickup Location",
                    "Delivery Location",
                    "Delivery Date",
                  ].map((header, index) => (
                    <th
                      scope="col"
                      className={clsx(
                        "px-4 py-1  text-[#667085] text-xs font-medium leading-4"
                      )}
                      key={index}
                    >
                      {header}
                    </th>
                  ))}
                  <th
                    scope="col"
                    className={clsx(
                      "px-4 py-1  text-[#667085] text-xs font-medium leading-4"
                    )}
                  >
                    <DeleteAllDeliveries
                      disabled={!checkedRows.some((a) => a.isChecked)}
                    />
                  </th>
                </tr>
              </thead>

              <tbody
                style={{ boxShadow: "0 0 0 2px #f4f2f2" }}
                className="   text-gray-900 rounded-[32px] "
              >
                {[...Array(10)]
                  .map((_, index) => {
                    return {
                      id: index,
                    };
                  })
                  .map((driver, index) => (
                    <TableRow
                      driver={driver}
                      setCheckedRows={setCheckedRows}
                      checkedRows={checkedRows}
                      key={index}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
