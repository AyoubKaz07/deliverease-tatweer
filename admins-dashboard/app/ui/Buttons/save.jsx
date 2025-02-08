import { Button } from "@mui/material";
import React from "react";

function SaveButton(props) {
  return (
    <Button
      className="rounded-md capitalize w-28 text-white text-base bg-[#2080E2]"
      variant="outlined"
      {...props}
    >
      Save
    </Button>
  );
}

export default SaveButton;
