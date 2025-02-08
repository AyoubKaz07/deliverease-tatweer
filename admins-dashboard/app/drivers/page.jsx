import { Divider, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import DriversTable from "../ui/drivers/table";
import AddDriverButton from "../ui/Buttons/add-driver";
import TablePagination from "../ui/drivers/pagination";
import { poppins } from "../ui/fonts";
import Search from "../ui/Search";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className={poppins.className}>
      <div className=" min-h-[50px]  flex flex-wrap gap-4 justify-between items-center ">
        <Suspense>
          <Search placeholder={"Search drivers here ..."} />
        </Suspense>
        <AddDriverButton />
      </div>
      <DriversTable />
      <Suspense>
        <TablePagination />
      </Suspense>
    </main>
  );
}
