import DeliveryStatus from "../deliveries/status";

function Recent_Deliveries() {
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
        Recent Deliveries
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
                    className="px-4 py-5 text-[#71717a] text-xs font-medium sm:pl-6"
                  >
                    Delivery State
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 text-[#71717a] text-xs font-medium"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 text-[#71717a] text-xs font-medium"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-5 text-[#71717a] text-xs font-medium"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-5 text-[#71717a] text-xs font-medium"
                  >
                    Driver
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-5 text-[#71717a] text-xs font-medium"
                  >
                    Client
                  </th>
                </tr>
              </thead>

              <tbody className="0 text-gray-900">
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="group">
                    <td className="whitespace-nowrap bg-white py-3 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                      <DeliveryStatus status={"completed"} />
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm">
                      12345
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm">
                      location
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm">
                      02/08/2024
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      Fodhil
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-3 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      serhane
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

export default Recent_Deliveries;
