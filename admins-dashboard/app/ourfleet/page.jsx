import Table from "../ui/ourfleet/table";
import TablePagination from "../ui/ourfleet/pagination";
import Search from "../ui/Search";
import { poppins } from "../ui/fonts";
import AddTruckButton from "../ui/ourfleet/buttons";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className={poppins.className}>
      <div className=" min-h-[50px]  flex flex-wrap gap-4 justify-between items-center ">
        <Suspense>
          <Search placeholder={"Search Truck by plate here ..."} />
        </Suspense>
        <AddTruckButton />
      </div>
      <Table />
      <Suspense>
      <TablePagination />

      </Suspense>

    </main>
  );
}
