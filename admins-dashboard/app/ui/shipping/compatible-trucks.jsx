import { Avatar } from "@mui/material";
import DeliveryStatus from "../deliveries/status";

function CompatibleTrucks() {
  const RecenetDeleveriesJSX = [...Array(5)].map((row, index) => (
    <tr key={index}>
      <td>
        <div className="flex items-center gap-2 justify-center w-24 h-6 rounded-2xl">
          <svg
            className={`svg-status-completed`}
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
          <span className={`span-status-completed}`}>Completed</span>
        </div>
      </td>
      <td>44</td>
      <td></td>
      <td>22/08/2024</td>
      <td>bilal</td>
      <td>abas</td>
    </tr>
  ));
  return (
    <div className="mt-6 md:border-[2px] py-6 rounded-3xl border-[solid] md:bg-white border-[#f4f2f2] flow-root">
      <div className=" text-[#2080e2] px-6  text-xl mb-8  md:mb-0 font-semibold leading-5">
        Compatibale Trucks for this ship
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md   md:pt-0">
            <div className="md:hidden">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="mb-2 border-solid border-[#f4f2f2] border-b-[1px] w-full rounded-md bg-white p-6"
                >
                  <div className="flex items-center justify-between border-dashed border-b-[2px] pb-4">
                    <div>
                      <div className="mb-2 flex items-center">12333</div>
                      <p className="text-sm text-gray-500">driver name</p>
                    </div>
                    <DeliveryStatus status={"completed"} />
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">client name</p>
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
            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
              <thead className="rounded-md text-left text-sm font-normal">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2 text-[#71717a] text-xs font-medium sm:pl-6"
                  >
                    Truck
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[#71717a] text-xs font-medium"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[#71717a] text-xs font-medium"
                  >
                    free capacity
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-[#71717a] text-xs font-medium"
                  >
                    free Volume
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-[#71717a] text-xs font-medium"
                  >
                    Driver
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-[#71717a] text-xs font-medium"
                  >
                    Temp Control
                  </th>
                </tr>
              </thead>

              <tbody className="0 font-semibold text-[#18181B]">
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="group">
                    <td className="whitespace-nowrap bg-white py-3 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="https://s3-alpha-sig.figma.com/img/11f2/48b1/b508a15de65a0aeb34d04838502d97f5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OQqTH0~sJPeAeNpFZF3emhspSf-3SUhz1NowIpWlk1dUNQBKTrscWWET1OQ6YiBoJ~l5M0CTbOiQJyl6ww3Ma5cnlSVHPOG~1YS4XA-neK0F8O3bskENiIZK9plzJsU-qQTkCtjGDVVLtBTimULk6FicC~WtClr-GS26RbUs-zZz4Otv6PUNR2ArjeyQMqaywJx2Gmsybx9U6V61TBfet~YsIULFrdac6Yan6smoFEo1a5qjx3OQe4mY-otnhe27q00euHERHIHIqliJmozvCitoaWTYg7Q1NbvDAKFb6hk0OsuOcokp1P8T2wUa9thVWN3Tfo28vzl0aeUd0EW-xA__"
                          alt={`fnd profile picture`}
                          width={24}
                          height={24}
                        />

                        <p className="font-semibold text-sm">1ABC234</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm">
                      <DeliveryStatus status={"In-Transit"} />
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm">
                      2,250 kg
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm">
                      91.8 m3
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      Lewis Hamilton
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      Deep-Freeze
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

export default CompatibleTrucks;
