"use client";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";

import { useState } from "react";
import { Dialog } from "@mui/material";

function ProfileDialog() {
  const [openProfileDialog, setOpenProfileDialog] = useState(false);
  function handleToglleClickProfileDialog() {
    setOpenProfileDialog((prev) => !prev);
  }

  return (
    <>
      <CompanyInfo
        open={openProfileDialog}
        handleClose={handleToglleClickProfileDialog}
      />
      <div
        className="flex gap-3 cursor-pointer items-center"
        onClick={handleToglleClickProfileDialog}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQAAAA?rs=1&pid=ImgDetMain"
          sx={{ width: 50, height: 50 }}
        />
        <div className="name">Mr.Bilal</div>
        {openProfileDialog ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon />
        )}
      </div>
    </>
  );
}

function CompanyInfo({ handleClose, open }) {
  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <div className="flex h-[250px] justify-center items-center px-5 rounded-2xl border-[2px] border-solid border-[#f4f2f2]">
        <div className=" flex w-full flex-col">
          <div className="flex justify-between items-start pr-2 mb-6">
            <div className=" flex gap-4 items-center">
              {/* <div className="prf-img">
              <img
                src="https://th.bing.com/th/id/OIP.tjUOUBGnthmW762mbRAFdQHaE8?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div> */}
              <Avatar
                alt="Remy Sharp"
                src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQAAAA?rs=1&pid=ImgDetMain"
                sx={{ width: 85, height: 85 }}
              />
              <div className="text-xl font-semibold text-[#2080e2]">
                Mr. MOSTEFAI mounir
              </div>
            </div>
            <div className="edit">
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
          </div>

          <div className="  w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            <div>
              {" "}
              <div className=" text-[#adadad] text-xs font-semibold">
                company Name
              </div>{" "}
              <div className="text-sm font-normal">Ifri</div>
            </div>
            <div>
              <div className="text-[#adadad] text-xs font-semibold">
                Address
              </div>
              <div className="text-sm font-normal">kjsqs</div>
            </div>
            <div>
              <div className="text-[#adadad] text-xs font-semibold">
                Email-Address
              </div>
              <div className="text-sm font-normal">ifri@bej.dz</div>
            </div>
            <div>
              <div className="text-[#adadad] text-xs font-semibold">
                Phone Number
              </div>
              <div className="text-sm font-normal">0673455258</div>
            </div>
            <div>
              <div className="text-[#adadad] text-xs font-semibold">
                Registration date
              </div>
              <div className="text-sm font-normal">28/08/2024</div>
            </div>
            <div>
              <div className="text-[#adadad] text-xs font-semibold">
                Number of drivers
              </div>
              <div className="text-sm font-normal">200</div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
export default ProfileDialog;
