import { Avatar } from "@mui/material";
import {DeleteIconButton} from "./buttons"
import DriverStatus from "./status";
import clsx from "clsx";

function DriversTable() {
  return (
    <div className="mt-2 flow-root">
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
                      <div className="mb-2 flex items-center">
                        <img
                          src={"j"}
                          className="mr-2 rounded-full"
                          width={28}
                          height={28}
                          alt={`dfjjfd's profile picture`}
                        />
                        <p>bilal</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        b.mamoun@esi-sba.dz
                      </p>
                    </div>
                    <DriverStatus status={"online"} />
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">44</p>
                      <p>22/08/2024</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      {/* <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table
              style={{ tableLayout: "fixed" }}
              className="hidden min-w-full rounded-md text-gray-900 md:table"
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
                  {[
                    "Name",
                    "Truck",
                    "Email address",
                    "Phone",
                    "Location",
                    "date",
                    "Total Deliveries",
                    "",
                  ].map((header, index) => (
                    <th
                      scope="col"
                      className={clsx(
                        "px-4 py-5  text-[#667085] text-xs font-medium leading-4",
                        {
                          "text-center": index === 6,
                        }
                      )}
                      key={index}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody
                style={{ boxShadow: "0 0 0 2px #f4f2f2" }}
                className="   text-gray-900 rounded-[32px] "
              >
                {[...Array(10)].map((_, index) => (
                  <tr
                    key={index}
                    style={{ transition: "all ease .2s" }}
                    className="group  rounded-3xl cursor-pointer bg-white hover:bg-[#e2ecff] "
                  >
                    <td
                      className={clsx(
                        "whitespace-nowrap  py-3 px-4  text-sm text-black group-first-of-type:rounded-tl-[32px] group-last-of-type:rounded-bl-[32px]   "
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="https://img.freepik.com/psd-gratuit/personne-celebrant-son-orientation-sexuelle_23-2150115662.jpg?semt=ais_incoming"
                          alt={`fnd profile picture`}
                          width={24}
                          height={24}
                        />
                        <p className="font-semibold text-sm">bilal</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm">
                      {/* <DriverStatus
                        status={index % 2 == 0 ? "online" : "offline"}
                      /> */}
                      {index % 2 == 0 ? "1ABC234" : "LPT-987"}
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold px-4 py-2 text-sm">
                      b.mamoun@esi-sba.dz
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm">
                      0673455258
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-md ">
                      Bechar, Algeria
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-md ">
                      22/08/2024
                    </td>
                    <td className="whitespace-nowrap text-center leading-5 font-semibold  px-4 py-2 text-sm">
                      55
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-tr-[32px] group-last-of-type:rounded-br-[32px]">
                    <DeleteIconButton/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriversTable;
