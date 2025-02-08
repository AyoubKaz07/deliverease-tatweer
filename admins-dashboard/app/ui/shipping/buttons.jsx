import { Button } from "@mui/material";

export function ChoosePathButton() {
  return (
    <Button
      //   onClick={handleToggleClick}

      className="flex w-full my-4 h-12 justify-center items-center gap-2 rounded-md border-solid border-[2.5px] border-[#2080e2]  uppercase bg-white text-[#2080e2] text-center text-base font-bold"
    >
      Choose delivery Path
    </Button>
  );
}

export function AddDeliveryButton() {
  return (
    <Button
      //   onClick={handleToggleClick}

      className="flex w-full my-4 h-12 justify-center items-center gap-2 rounded-md    uppercase text-white bg-[#2080e2] text-center text-base font-bold"
    >
      Add Delivery
    </Button>
  );
}
