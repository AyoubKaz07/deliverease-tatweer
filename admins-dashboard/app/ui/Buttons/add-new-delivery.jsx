import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function AddNewShippingButton() {
  return (
   <Link href={"/shipping"}>
    <Button
      className="w-52 hidden lg:flex  h-16 rounded-xl bg-[#2080e2] text-white text-base font-bold  text-center capitalize "
      variant="outlined"
      startIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M20.7188 12.5938H4.46875M12.5938 4.46875V20.7188"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      New Shipping
    </Button>
   </Link>
  );
}

export default AddNewShippingButton;
