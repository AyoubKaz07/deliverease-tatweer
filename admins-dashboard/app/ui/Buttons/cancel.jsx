import { Button } from "@mui/material";
import React from "react";

function CancelButton(props) {
  return (
    <Button className="rounded-md capitalize w-28 text-base text-[#2080E2]" variant="outlined" {...props}>
      Cancel
    </Button>
  );
}

export default CancelButton;
