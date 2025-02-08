"use client";

import { Button, Checkbox, OutlinedInput } from "@mui/material";
import { ChoosePathButton } from "./buttons";
import { AddDeliveryButton } from "./buttons";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import clsx from "clsx";
import { useState } from "react";

function DeliverySelection() {
  const [selected, setSelected] = useState("Details");
  const [driver, setDriver] = useState("");

  const handleChange = (event) => {
    setDriver(event.target.value);
  };
  return (
    <div className="p-4 bg-white border-[2px] border-solid border-[#F4F2F2] rounded-2xl ">
      <ul className=" grid grid-cols-2">
        {["Details", "Delivery Path"].map((item, index) => (
          <li key={index}>
            <Button
              onClick={() => setSelected(item)}
              className={clsx(
                "w-full capitalize font-semibold text-lg shadow-none hover:shadow-none ",
                {
                  "bg-[#2080E2] text-white": selected === item,
                  "bg-white text-[#2080E2]": selected !== item,
                }
              )}
              variant="contained"
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
      {selected === "Details" ? (
        <>
          <div className="my-4 flex gap-[100px] ">
            <ul className="flex flex-col gap-3">
              {[
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5001 16.25H17.3334V18.4167H19.5001M19.5001 11.9167H17.3334V14.0833H19.5001M21.6667 20.5833H13.0001V18.4167H15.1667V16.25H13.0001V14.0833H15.1667V11.9167H13.0001V9.75H21.6667M10.8334 7.58333H8.66675V5.41667H10.8334M10.8334 11.9167H8.66675V9.75H10.8334M10.8334 16.25H8.66675V14.0833H10.8334M10.8334 20.5833H8.66675V18.4167H10.8334M6.50008 7.58333H4.33341V5.41667H6.50008M6.50008 11.9167H4.33341V9.75H6.50008M6.50008 16.25H4.33341V14.0833H6.50008M6.50008 20.5833H4.33341V18.4167H6.50008M13.0001 7.58333V3.25H2.16675V22.75H23.8334V7.58333H13.0001Z"
                    fill="#3C3C3C"
                  />
                </svg>,
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_86_2451)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.1727 20.2884C13.8527 20.2398 10.1118 19.7228 6.194 15.8059C2.27708 11.888 1.761 8.14802 1.7115 6.8271C1.63816 4.8141 3.18 2.85885 4.96108 2.09527C5.17556 2.00266 5.41043 1.9674 5.64265 1.99295C5.87487 2.0185 6.09645 2.10399 6.28566 2.24102C7.75233 3.30985 8.76433 4.92685 9.63333 6.19827C9.82453 6.47761 9.90628 6.81752 9.86301 7.15325C9.81973 7.48898 9.65445 7.79705 9.39866 8.01877L7.61025 9.34702C7.52384 9.40941 7.46302 9.50105 7.43908 9.6049C7.41514 9.70875 7.42971 9.81776 7.48008 9.91169C7.88525 10.6478 8.60575 11.7441 9.43075 12.5691C10.2567 13.3941 11.4043 14.1623 12.1917 14.6133C12.2905 14.6687 12.4067 14.6842 12.5165 14.6566C12.6263 14.6289 12.7213 14.5603 12.7821 14.4648L13.9462 12.6929C14.1603 12.4085 14.476 12.2181 14.8273 12.1614C15.1786 12.1046 15.5383 12.186 15.8309 12.3885C17.1207 13.2814 18.6258 14.2759 19.7277 15.6867C19.8758 15.8773 19.9701 16.1041 20.0005 16.3436C20.031 16.5831 19.9966 16.8263 19.9009 17.0479C19.1337 18.8382 17.1922 20.3626 15.1727 20.2884Z"
                      fill="#3C3C3C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_86_2451">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>,
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9999 13.0002C11.8083 13.0002 10.7881 12.5759 9.9395 11.7272C9.09089 10.8786 8.66658 9.8585 8.66658 8.66683C8.66658 7.47516 9.09089 6.45502 9.9395 5.60641C10.7881 4.7578 11.8083 4.3335 12.9999 4.3335C14.1916 4.3335 15.2117 4.7578 16.0603 5.60641C16.9089 6.45502 17.3333 7.47516 17.3333 8.66683C17.3333 9.8585 16.9089 10.8786 16.0603 11.7272C15.2117 12.5759 14.1916 13.0002 12.9999 13.0002ZM4.33325 21.6668V18.6335C4.33325 18.0196 4.49142 17.4556 4.80775 16.9413C5.12409 16.4271 5.5437 16.0342 6.06659 15.7627C7.18603 15.2029 8.32353 14.7833 9.47908 14.5038C10.6346 14.2243 11.8083 14.0842 12.9999 14.0835C14.1916 14.0835 15.3652 14.2236 16.5208 14.5038C17.6763 14.784 18.8138 15.2037 19.9333 15.7627C20.4569 16.0335 20.8768 16.4264 21.1932 16.9413C21.5095 17.4563 21.6673 18.0203 21.6666 18.6335V21.6668H4.33325Z"
                    fill="#3C3C3C"
                  />
                </svg>,
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_86_2451)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.1727 20.2884C13.8527 20.2398 10.1118 19.7228 6.194 15.8059C2.27708 11.888 1.761 8.14802 1.7115 6.8271C1.63816 4.8141 3.18 2.85885 4.96108 2.09527C5.17556 2.00266 5.41043 1.9674 5.64265 1.99295C5.87487 2.0185 6.09645 2.10399 6.28566 2.24102C7.75233 3.30985 8.76433 4.92685 9.63333 6.19827C9.82453 6.47761 9.90628 6.81752 9.86301 7.15325C9.81973 7.48898 9.65445 7.79705 9.39866 8.01877L7.61025 9.34702C7.52384 9.40941 7.46302 9.50105 7.43908 9.6049C7.41514 9.70875 7.42971 9.81776 7.48008 9.91169C7.88525 10.6478 8.60575 11.7441 9.43075 12.5691C10.2567 13.3941 11.4043 14.1623 12.1917 14.6133C12.2905 14.6687 12.4067 14.6842 12.5165 14.6566C12.6263 14.6289 12.7213 14.5603 12.7821 14.4648L13.9462 12.6929C14.1603 12.4085 14.476 12.2181 14.8273 12.1614C15.1786 12.1046 15.5383 12.186 15.8309 12.3885C17.1207 13.2814 18.6258 14.2759 19.7277 15.6867C19.8758 15.8773 19.9701 16.1041 20.0005 16.3436C20.031 16.5831 19.9966 16.8263 19.9009 17.0479C19.1337 18.8382 17.1922 20.3626 15.1727 20.2884Z"
                      fill="#3C3C3C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_86_2451">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>,
              ].map((svg, index) => (
                <li
                  key={index}
                  className="flex text-[#3C3C3C] font-medium text-lg gap-2 items-center"
                >
                  {svg}
                  {
                    [
                      "Hmaoud boualam",
                      "0556782302",
                      "Lewis Hamilton",
                      "0673455258",
                    ][index]
                  }
                </li>
              ))}
            </ul>
            <div>
              <svg
                width="54"
                height="55"
                viewBox="0 0 54 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.754883"
                  width="54"
                  height="54"
                  rx="13"
                  fill="#FEE3E3"
                />
                <g clipPath="url(#clip0_58_5679)">
                  <circle cx="27" cy="27.7549" r="16" fill="#E2211C" />
                  <g clipPath="url(#clip1_58_5679)">
                    <path
                      d="M38.375 31.75H37.75V27.5273C37.75 27.0312 37.5508 26.5547 37.1992 26.2031L33.2969 22.3008C32.9453 21.9492 32.4688 21.75 31.9727 21.75H30.25V19.875C30.25 18.8398 29.4102 18 28.375 18H18.375C17.3398 18 16.5 18.8398 16.5 19.875V21.75H14.3125C14.1406 21.75 14 21.8906 14 22.0625V22.6875C14 22.8594 14.1406 23 14.3125 23H24.9375C25.1094 23 25.25 23.1406 25.25 23.3125V23.9375C25.25 24.1094 25.1094 24.25 24.9375 24.25H15.5625C15.3906 24.25 15.25 24.3906 15.25 24.5625V25.1875C15.25 25.3594 15.3906 25.5 15.5625 25.5H23.6875C23.8594 25.5 24 25.6406 24 25.8125V26.4375C24 26.6094 23.8594 26.75 23.6875 26.75H14.3125C14.1406 26.75 14 26.8906 14 27.0625V27.6875C14 27.8594 14.1406 28 14.3125 28H22.4375C22.6094 28 22.75 28.1406 22.75 28.3125V28.9375C22.75 29.1094 22.6094 29.25 22.4375 29.25H16.5V34.25C16.5 36.3203 18.1797 38 20.25 38C22.3203 38 24 36.3203 24 34.25H29C29 36.3203 30.6797 38 32.75 38C34.8203 38 36.5 36.3203 36.5 34.25H38.375C38.7188 34.25 39 33.9688 39 33.625V32.375C39 32.0312 38.7188 31.75 38.375 31.75ZM20.25 36.125C19.2148 36.125 18.375 35.2852 18.375 34.25C18.375 33.2148 19.2148 32.375 20.25 32.375C21.2852 32.375 22.125 33.2148 22.125 34.25C22.125 35.2852 21.2852 36.125 20.25 36.125ZM32.75 36.125C31.7148 36.125 30.875 35.2852 30.875 34.25C30.875 33.2148 31.7148 32.375 32.75 32.375C33.7852 32.375 34.625 33.2148 34.625 34.25C34.625 35.2852 33.7852 36.125 32.75 36.125ZM35.875 28H30.25V23.625H31.9727L35.875 27.5273V28Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_58_5679">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(11 11.7549)"
                    />
                  </clipPath>
                  <clipPath id="clip1_58_5679">
                    <rect
                      width="25"
                      height="20"
                      fill="white"
                      transform="translate(14 18)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <ul className=" grid gap-4 grid-cols-2">
            {[
              "Product",
              "Size",
              "Temp control",
              "Time Window",
              "Other insrtructions",
            ].map((item, index) => (
              <li key={index}>
                <p className="text-[#ADADAD] text-lg  font-semibold">{item}</p>
                <p className="text-base text-black font-medium">
                  {
                    [
                      "Hamoud Bida",
                      "2,000kg / 40 m3",
                      "Chilled",
                      "3 days",
                      "Fragile , glasses",
                    ][index]
                  }
                </p>
              </li>
            ))}
          </ul>
          <ChoosePathButton />
        </>
      ) : (
        <>
          <div className="my-4">
            <h4 className="text-lg text-[#2080E2] font-semibold ">
              Select Delivery Path
            </h4>
            <div className="flex flex-col gap-3 py-3">
              <OutlinedInput
                sx={{ width: "100%", height: "50px" }}
                className="text-field"
                startAdornment={
                  <svg
                    className="mr-3"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.7673 26.5453L14 27.2153L13.2326 26.5453C6.77986 20.9108 3.5 15.9911 3.5 11.6665C3.5 5.54228 8.27989 1.1665 14 1.1665C19.7201 1.1665 24.5 5.54228 24.5 11.6665C24.5 15.9911 21.2201 20.9108 14.7673 26.5453ZM5.83333 11.6665C5.83333 14.9906 8.52438 19.1723 14 24.1071C19.4756 19.1723 22.1667 14.9906 22.1667 11.6665C22.1667 6.87921 18.4752 3.49984 14 3.49984C9.5248 3.49984 5.83333 6.87921 5.83333 11.6665ZM8.16667 12.8332H15.8501L13.175 15.5082L14.825 17.1581L20.3166 11.6665L14.825 6.17488L13.175 7.82479L15.8501 10.4998H8.16667V12.8332Z"
                      fill="#2080E2"
                    />
                  </svg>
                }
                placeholder="Choose pick up point"
              />

              <OutlinedInput
                sx={{ width: "100%", height: "50px" }}
                className="text-field"
                startAdornment={
                  <svg
                    className="mr-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2788 19.2982L11.9999 20.4149L10.721 19.2982C6.15308 15.3095 3.83325 11.7799 3.83325 8.50016C3.83325 3.85848 7.454 0.333496 11.9999 0.333496C16.5458 0.333496 20.1666 3.85848 20.1666 8.50016C20.1666 11.7799 17.8468 15.3095 13.2788 19.2982ZM4.63306 15.2708C5.11208 15.9266 5.64569 16.5937 6.23364 17.2723C4.06104 17.7616 2.66658 18.4561 2.66658 19.0002C2.66658 19.9416 6.84225 21.3335 11.9999 21.3335C17.1576 21.3335 21.3333 19.9416 21.3333 19.0002C21.3333 18.4561 19.9388 17.7616 17.7662 17.2723C18.3541 16.5937 18.8878 15.9266 19.3668 15.2708C21.9904 16.0669 23.6666 17.3439 23.6666 19.0002C23.6666 21.9247 18.4402 23.6668 11.9999 23.6668C5.55961 23.6668 0.333252 21.9247 0.333252 19.0002C0.333252 17.3439 2.00945 16.0669 4.63306 15.2708ZM11.9999 2.66683C15.271 2.66683 17.8333 5.16135 17.8333 8.50016C17.8333 10.8883 15.9347 13.827 11.9999 17.3155C8.06513 13.827 6.16659 10.8883 6.16659 8.50016C6.16659 5.16135 8.72887 2.66683 11.9999 2.66683ZM11.9999 5.00016C13.9329 5.00016 15.4999 6.56717 15.4999 8.50016C15.4999 10.4332 13.9329 12.0002 11.9999 12.0002C10.0669 12.0002 8.49992 10.4332 8.49992 8.50016C8.49992 6.56717 10.0669 5.00016 11.9999 5.00016ZM10.8333 8.50016C10.8333 7.85583 11.3556 7.3335 11.9999 7.3335C12.6443 7.3335 13.1666 7.85583 13.1666 8.50016C13.1666 9.1445 12.6443 9.66683 11.9999 9.66683C11.3556 9.66683 10.8333 9.1445 10.8333 8.50016Z"
                      fill="#2080E2"
                    />
                  </svg>
                }
                placeholder="Choose the destination"
              />
              <OutlinedInput
                sx={{ width: "100%", height: "50px" }}
                className="text-field"
                startAdornment={
                  <svg
                    className="mr-3"
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.49992 17.1668V14.8335H10.8333C10.5416 12.1502 9.39436 9.92377 7.39159 8.15433C5.38881 6.38488 3.03603 5.50016 0.333252 5.50016V3.16683C2.84159 3.16683 5.14575 3.82794 7.24575 5.15016C9.34575 6.47238 10.9305 8.26127 11.9999 10.5168C12.7388 8.94183 13.711 7.5465 14.9166 6.33083C16.1221 5.11516 17.4735 4.0605 18.9708 3.16683H14.3333V0.833496H22.4999V9.00016H20.1666V5.15016C18.3583 6.2585 16.8027 7.62933 15.4999 9.26266C14.1971 10.896 13.4194 12.7529 13.1666 14.8335H15.4999V17.1668H8.49992Z"
                      fill="#2080E2"
                    />
                  </svg>
                }
                placeholder="Add Stop points"
              />
            </div>
            <div className=" my-3">
              <h4 className="text-lg mb-3 text-[#2080E2] font-semibold ">
                Select Shipping line
              </h4>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Driver by name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={driver}
                  label="Select Driver by name"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>abbass</MenuItem>
                  <MenuItem value={20}>fodhil</MenuItem>
                  <MenuItem value={30}>ayoub</MenuItem>
                </Select>
              </FormControl>
              <div className="flex items-center -ml-2">
                <Checkbox />
                <p className="text-[#2080E2] text-lg font-medium">
                  auto select driver
                </p>
              </div>
              <AddDeliveryButton />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DeliverySelection;
