"use client";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

function TablePagination() {
  const searchParams = useSearchParams();
  const currentPage = useMemo(
    () => Number(searchParams.get("page")) || 1,
    [searchParams]
  );
  return (
    <Stack
      direction="row"
      className="w-full flex mt-5 justify-center items-center"
    >
      <Pagination
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              boxShadow: item.selected
                ? "0px 0px 10px 0px rgba(162, 170, 180, 0.25)"
                : "none",
              "&.Mui-selected": {
                background: "#fff",
                boxShadow: "0px 0px 10px 0px rgba(162, 170, 180, 0.25)",
                color: "#3d6dfe",
              },
            }}
            component={Link}
            href={`/ourfleet?page=${item.page}`}
            className={`font-medium text-sm rounded-lg text-[#667085] px-2 py-0 h-[30px] w-[30px]  focus:rounded-md`}
          />
        )}
        count={10}
        page={currentPage}
        variant="contained"
        shape="rounded"
      />
    </Stack>
  );
}

export default TablePagination;
