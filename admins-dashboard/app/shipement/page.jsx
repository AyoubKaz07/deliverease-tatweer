import Table from "../ui/deliveries/table";
import TablePagination from "../ui/deliveries/pagination";
import Search from "../ui/Search";
import { poppins } from "../ui/fonts";

export default async function Page() {
  return (
    <main className={poppins.className}>
      <div className=" min-h-[50px]  flex flex-wrap gap-4 justify-between items-center ">
        <Search placeholder={"Search deliveries here ..."} />
      </div>
      <Table />
      <TablePagination />
    </main>
  );
}
