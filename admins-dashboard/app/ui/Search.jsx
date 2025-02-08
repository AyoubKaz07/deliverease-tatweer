"use client";
import { Divider, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <Paper
      sx={{
        boxShadow:
          "linear-gradient(0deg, #fff 0%, #fff 100%), linear-gradient(0deg,rgba(42, 89, 254, 0.3) 0%, rgba(42, 89, 254, 0.3) 100%),#000",
      }}
      className=" shadow-none text-black w-full md:w-96 flex items-center rounded-lg border-[2px] border-solid border-[#f4f2f2] "
      component="form"
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Suspense>
        <InputBase
          style={{
            boxShadow:
              "linear-gradient(0deg, #fff 0%, #fff 100%),linear-gradient(0deg,rgba(42, 89, 254, 0.3) 0%,rgba(42, 89, 254, 0.3) 100%),#000",
          }}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="text-black text-lg  font-medium"
          defaultValue={searchParams.get("query")?.toString()}
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
        />
      </Suspense>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}

export default Search;
