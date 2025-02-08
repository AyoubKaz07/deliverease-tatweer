import { ChangeSettingsButton, UpgradePlanButton } from "./buttons";
import { Avatar } from "@mui/material";

function OwnerInfo() {
  return (
    <div className="relative rounded-2xl minh-[390px] bg-white border-solid border-[2px] border-[#f4f2f2] p-5">
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-5">
          <Avatar
            alt="Remy Sharp"
            src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQAAAA?rs=1&pid=ImgDetMain"
            className=" w-16 h-16 md:w-20 md:h-20"
          />
          <p className="text-black  text-lg md:text-xl font-semibold">bilal</p>
          {/* <div className="status">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
          >
            <circle cx="4" cy="4.5" r="4" fill="#22C55E" />
          </svg>
          <span>online</span>
        </div> */}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="39"
          viewBox="0 0 38 39"
          fill="none"
        >
          <path
            d="M4.75 33.75V27.0208L25.65 6.16042C25.9667 5.87014 26.3166 5.64583 26.6998 5.4875C27.0829 5.32917 27.4851 5.25 27.9062 5.25C28.3285 5.25 28.7375 5.32917 29.1333 5.4875C29.5292 5.64583 29.8722 5.88333 30.1625 6.2L32.3396 8.41667C32.6562 8.70694 32.8874 9.05 33.0331 9.44583C33.1788 9.84167 33.2511 10.2375 33.25 10.6333C33.25 11.0556 33.1777 11.4583 33.0331 11.8414C32.8885 12.2246 32.6573 12.574 32.3396 12.8896L11.4792 33.75H4.75ZM27.8667 12.85L30.0833 10.6333L27.8667 8.41667L25.65 10.6333L27.8667 12.85Z"
            fill="#2080E2"
          />
        </svg>
      </div>
      <div className=" my-10 grid gap-x-4 gap-y-7 grid-cols-[repeat(auto-fit,minmax(190px,23%))] w-full justify-between">
        {[
          "Phone",
          "Email",
          "Adress",
          "Drivers",
          "Registered",
          "Driver Cost",
          "Delivery Cost",
        ].map((label, index) => (
          <div key={index}>
            <h6 className="md:text-lg  text-start text-[#adadad] font-semibold">
              {label}
            </h6>
            <p className="font-medium md:text-lg">
              {
                [
                  "b.mamoun@esi-sba.dz",
                  "hh@jsjs.cj",
                  "sba",
                  "200",
                  "28/08/2024",
                  "200",
                  "300",
                ][index]
              }
            </p>
          </div>
        ))}
      </div>
      {/* <table className="w-full mt-10-">
        <thead>
          <tr>
            {["Phone", "Email", "Adress", "Drivers"].map((label, index) => (
              <th
                key={index}
                className="text-lg  text-start text-[#adadad] font-semibold"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-medium text-lg">b.mamoun@esi-sba.dz</td>
            <td className="font-medium text-lg">hhs@jsjs.cj</td>
            <td className="font-medium text-lg"> sba</td>
            <td className="font-medium text-lg">200</td>
          </tr>
          <tr>
            <th
              className="text-lg text-start text-[#adadad] font-semibold"
              style={{ paddingTop: "40px" }}
            >
              {" "}
              Registered
            </th>
            <th
              className="text-lg text-start text-[#adadad] font-semibold"
              style={{ paddingTop: "40px" }}
            >
              Driver Cost
            </th>
            <th
              className="text-lg text-start text-[#adadad] font-semibold"
              style={{ paddingTop: "40px" }}
            >
              Delivery Cost
            </th>
          </tr>
          <tr>
            <td className="font-medium text-lg">28/08/2023</td>
            <td className="font-medium text-lg">80</td>
            <td className="font-medium text-lg">30</td>
          </tr>
        </tbody>
      </table> */}

      <div className="update-btn flex gap-3 justify-end mt-6 pr-8">
        <UpgradePlanButton />
        <ChangeSettingsButton />
      </div>
    </div>
  );
}

export default OwnerInfo;
