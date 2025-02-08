"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
import CancelButton from "./cancel";
import SaveButton from "./save";

export default function AddDriverButton() {
  const [open, setOpen] = useState(false);
  function handleToggleClick() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <Dialog open={open} onClose={handleToggleClick} maxWidth="md" fullWidth>
        <DialogTitle className="text-[#2080E2] font-semibold ">
          New Driver
        </DialogTitle>
        <DialogContent>
          <form
            action={(e) => {
              e.preventDefault();
              console.log(e.entries());
            }}
            className=""
            autoComplete="off"
          >
            <h4 className="text-[##18181B] text-xl font-semibold">
              Driver info
            </h4>
            <div className="grid mt-4 gap-x-6 gap-y-4 grid-cols-[repeat(2,minmax(200px,1fr))]">
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Full name
                </label>
                <OutlinedInput name="name" placeholder="eg. MOSTEFAI mounir" />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Gender
                </label>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="gender"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>male</MenuItem>
                    <MenuItem value={20}>female</MenuItem>
                    {/* <MenuItem value={30}>deliverease</MenuItem> */}
                  </Select>
                </FormControl>
              </div>
              <div className="flex  flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  date of birth *
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    defaultValue={dayjs("2022-04-17")}
                    className="w-full mb-3"
                  />
                </LocalizationProvider>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Place of birth
                </label>
                <OutlinedInput name="placeOfBirth" placeholder="eg. SBA" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Address
                </label>
                <OutlinedInput name="address" placeholder="eg. Oued Samar" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Social Number
                </label>
                <OutlinedInput
                  name="socialNumber"
                  placeholder="eg. 0001823838"
                />
              </div>
            </div>
            <h4 className="text-[##18181B] mt-4 text-xl font-semibold">
              Contact
            </h4>
            <div className="grid mt-4 gap-x-6 gap-y-4 grid-cols-[repeat(2,minmax(200px,1fr))]">
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Phone Number
                </label>
                <TextField
                  type="text"
                  name="phone"
                  placeholder="eg. 0559 28 19 22"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Email
                </label>
                <OutlinedInput
                  type="email"
                  name="email"
                  placeholder="eg b.mamoun@esi-sba.dz"
                />
              </div>
            </div>
            <h4 className="text-[##18181B] mt-4 text-xl font-semibold">
              Vehicle Info
            </h4>
            <div className="grid mt-4 gap-x-6 gap-y-4 grid-cols-[repeat(2,minmax(200px,1fr))]">
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Manufacturer
                </label>
                <OutlinedInput
                  name="manufacturer"
                  placeholder="eg. Generalist"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Plate Id *
                </label>
                <OutlinedInput name="plateId" placeholder="eg. Doctor" />
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions className="pr-6 mb-4">
          <CancelButton onClick={handleToggleClick} />
          <SaveButton />
        </DialogActions>
      </Dialog>
      <Button
        onClick={handleToggleClick}
        startIcon={
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7188 12.5938H4.46875M12.5938 4.46875V20.7188"
              stroke="#2080E2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        className="flex w-60 h-12 justify-center items-center gap-2 rounded-md border-solid border-[1.5px] border-[#2080e2] capitalize bg-white text-[#2080e2] text-center text-base font-bold  "
      >
        Add New Driver
      </Button>
    </>
  );
}
