"use client";

import { Checkbox, IconButton } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";

function ShipsRow() {
  const [open, setOpen] = useState(false);
  return (
    <li
      style={{ transition: "ease all .2s" }}
      className={clsx("flex overflow-hidden  flex-col gap-4", {
        "h-[60px]": !open,
        "h-fit": open,
      })}
    >
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-3">
          <svg
            width="54"
            height="55"
            viewBox="0 0 54 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.754883" width="54" height="54" rx="13" fill="#FEE3E3" />
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
          <div>
            <p className="Hamoud Bida font-medium text-base">Hamoud Bida</p>
            <p className="flex  items-center gap-1">
              <span>
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 9.50488H9.33329V10.6715H10.5M10.5 7.17155H9.33329V8.33822H10.5M11.6666 11.8382H6.99996V10.6715H8.16663V9.50488H6.99996V8.33822H8.16663V7.17155H6.99996V6.00488H11.6666M5.83329 4.83822H4.66663V3.67155H5.83329M5.83329 7.17155H4.66663V6.00488H5.83329M5.83329 9.50488H4.66663V8.33822H5.83329M5.83329 11.8382H4.66663V10.6715H5.83329M3.49996 4.83822H2.33329V3.67155H3.49996M3.49996 7.17155H2.33329V6.00488H3.49996M3.49996 9.50488H2.33329V8.33822H3.49996M3.49996 11.8382H2.33329V10.6715H3.49996M6.99996 4.83822V2.50488H1.16663V13.0049H12.8333V4.83822H6.99996Z"
                    fill="#2080E2"
                  />
                </svg>
              </span>
              <span className="text-xs text-[#3C3C3C]">Hamoud boualam</span>
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          <IconButton
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6482 0.863777C19.3786 0.594287 19.0131 0.442896 18.6319 0.442896C18.2507 0.442896 17.8852 0.594287 17.6156 0.863777L10.5 7.9794L3.38434 0.863777C3.11322 0.601925 2.7501 0.457033 2.3732 0.460308C1.99629 0.463583 1.63575 0.614763 1.36922 0.881288C1.1027 1.14781 0.951519 1.50836 0.948244 1.88526C0.944969 2.26217 1.08986 2.62529 1.35171 2.8964L9.48365 11.0283C9.75322 11.2978 10.1188 11.4492 10.5 11.4492C10.8811 11.4492 11.2467 11.2978 11.5163 11.0283L19.6482 2.8964C19.9177 2.62683 20.0691 2.26126 20.0691 1.88009C20.0691 1.49892 19.9177 1.13335 19.6482 0.863777Z"
                fill="#545454"
              />
            </svg>
          </IconButton>
          <Checkbox />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#ADADAD]">Size</p>
          <p className="font-medium text-sm">2,000kg / 40 m3</p>
        </div>
        <div className="font-normal text-xs text-[#3C3C3C]">
          <p>From: BouIsmail, Tipaza</p>
          <p>to: BouIsmail, Tipaza</p>
        </div>
      </div>
    </li>
  );
}

export default ShipsRow;
