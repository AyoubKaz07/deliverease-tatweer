import Link from "next/link";
import AcmeLogo from "../acme-logo";
import NavLinks from "./nav-links";
import clsx from "clsx";
import { poppins } from "../fonts";

export default function SideNav() {
  return (
    <div
      id="sidenav"
      className={`flex peer absolute z-10  md:w-[102px] md:hover:w-64 overflow-hidden   border-r-[solid] border-r-[0.855px] border-r-[#e8e8e8] bg-[rgba(32,128,226,1)] md:h-full justify-center md:flex-col px-3 py-5 md:py-14 md:px-2 ${poppins.className}`}
      style={{ transition: "all 0.5s ease" }}
    >
      <Link className="mb-2 flex h-20 items-end justify-start   p-4 " href="/">
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-center gap-5  space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href="/settings"
          style={{ transition: "all 0.5s ease" }}
          className={clsx(
            "flex h-[48px] grow items-center px-6   hover:scale-[1.1] gap-10   rounded-md  p-3 text-sm font-medium  md:flex-none   "
          )}
        >
          <svg
            style={{ flexShrink: "0" }}
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
          >
            <path
              d="M19.0001 36.9168C10.2015 34.9614 3.16675 26.66 3.16675 17.9168V8.41683L19.0001 2.0835L34.8334 8.41683V17.9168C34.8334 26.6632 27.7987 34.9614 19.0001 36.9168ZM6.33341 10.0002V17.9168C6.4239 21.5777 7.71149 25.1081 9.99911 27.9676C12.2867 30.8271 15.4484 32.8583 19.0001 33.7502C22.5518 32.8583 25.7134 30.8271 28.0011 27.9676C30.2887 25.1081 31.5763 21.5777 31.6667 17.9168V10.0002L19.0001 5.25016L6.33341 10.0002Z"
              fill="white"
            />
            <path
              d="M19.0001 17.9167C21.1862 17.9167 22.9584 16.1445 22.9584 13.9583C22.9584 11.7722 21.1862 10 19.0001 10C16.814 10 15.0417 11.7722 15.0417 13.9583C15.0417 16.1445 16.814 17.9167 19.0001 17.9167Z"
              fill="white"
            />
            <path
              d="M11.0833 24.25C11.8637 25.6722 13.0079 26.8614 14.399 27.696C15.79 28.5306 17.3778 28.9807 18.9999 29C20.622 28.9807 22.2098 28.5306 23.6009 27.696C24.9919 26.8614 26.1362 25.6722 26.9166 24.25C26.877 21.248 21.6251 19.5 18.9999 19.5C16.3605 19.5 11.1228 21.248 11.0833 24.25Z"
              fill="white"
            />
          </svg>
          <p className=" text-[rgba(255,255,255,1)] text-xl font-semibold leading-3 whitespace-nowrap hidden md:block">
            Settings
          </p>
        </Link>
        <form
        //  action={async () => {
        //     // 'use server';
        //     // await signOut();
        //   }}
        >
          <button
            style={{ transition: "all 0.5s ease" }}
            className="flex   h-[48px] grow items-center px-6   hover:scale-[1.1] gap-10    p-3 text-sm font-medium   md:flex-none   "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M3.91667 29.25C3.04583 29.25 2.30061 28.9402 1.681 28.3206C1.06139 27.701 0.751056 26.9552 0.75 26.0833V3.91667C0.75 3.04583 1.06033 2.30061 1.681 1.681C2.30167 1.06139 3.04689 0.751056 3.91667 0.75H15V3.91667H3.91667V26.0833H15V29.25H3.91667ZM21.3333 22.9167L19.1562 20.6208L23.1937 16.5833H10.25V13.4167H23.1937L19.1562 9.37917L21.3333 7.08333L29.25 15L21.3333 22.9167Z"
                fill="white"
              />
            </svg>
            <div className=" text-[rgba(255,255,255,1)] text-xl font-semibold leading-3 whitespace-nowrap hidden md:block">
              Log Out
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
