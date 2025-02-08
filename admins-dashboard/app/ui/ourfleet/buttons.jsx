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
import CancelButton from "../Buttons/cancel";
import SaveButton from "../Buttons/save";

export default function AddTruckButton() {
  const [open, setOpen] = useState(false);
  function handleToggleClick() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <Dialog open={open} onClose={handleToggleClick} maxWidth="md" fullWidth>
        <DialogTitle className="text-[#2080E2] font-semibold ">
          New Vehicle
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
              Vehicle Info
            </h4>
            <div className="grid mt-4 gap-x-6 gap-y-4 grid-cols-[repeat(2,minmax(200px,1fr))]">
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Manufacturer
                </label>
                <OutlinedInput name="manufacturer" placeholder="eg. Renault" />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  License Plate
                </label>
                <OutlinedInput name="licensePlate" placeholder="eg. LPT-987" />
              </div>
              <div className="flex  flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Year of Manufacture
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    defaultValue={dayjs("2022-04-17")}
                    className="w-full mb-3"
                    label="Basic date picker"
                  />
                </LocalizationProvider>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Truck Type
                </label>
                <OutlinedInput name="truckType" placeholder="eg. Reefers" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Fuel Type
                </label>
                <OutlinedInput name="fuelType" placeholder="eg. Oued Samar" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Fuel Consumption
                </label>
                <OutlinedInput
                  name="fuelConsumption"
                  placeholder="eg. 0001823838"
                />
              </div>
            </div>
            <h4 className="text-[##18181B] mt-4 text-xl font-semibold">
              Capacity
            </h4>
            <div className="grid mt-4 gap-x-6 gap-y-4 grid-cols-[repeat(2,minmax(200px,1fr))]">
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Max Capacity
                </label>
                <OutlinedInput name="maxCapacity" placeholder="eg. 3,250 kg" />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Volume
                </label>
                <OutlinedInput name="volume" placeholder="eg.91.8 m3" />
              </div>
            </div>
            <h4 className="text-[##18181B] mt-4 text-xl font-semibold">
              Temperature Control
            </h4>
            <div className="grid mt-4 gap-x-6 gap-y-4 grid-cols-[repeat(2,minmax(200px,1fr))]">
              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Cooling Type
                </label>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    eg. Deep-Freeze
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="eg. Deep-Freeze"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>DeliverEase</MenuItem>
                    <MenuItem value={20}>DeliverEase</MenuItem>
                    <MenuItem value={30}>DeliverEase</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[#18181B] font-medium text-lg">
                  Temperature Range
                </label>
                <div className="flex gap-3">
                  <TextField
                    id="min"
                    type="number"
                    name="temperatureRange"
                    placeholder="min"
                  />
                  <TextField
                    id="max"
                    type="number"
                    name="temperatureRange"
                    placeholder="max"
                  />
                </div>
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
        Add New Truck
      </Button>
    </>
  );
}
