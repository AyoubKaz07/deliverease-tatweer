import { IconButton } from "@mui/material";
import ShipsRow from "./ShipsRow";
function Ships() {
  return (
    <div className="ships h-full max-h-[900px] overflow-hidden px-4 border-[2px] border-solid border-[#F4F2F2] rounded-xl bg-white py-4">
      <div className="flex gap-3 justify-between items-center">
        <h3 className="text-[#2080E2] font-semibold text-lg md:text-xl ">
          Requested Ships
        </h3>
        <IconButton>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="42" height="42" rx="9" fill="white" />
            <rect
              x="1"
              y="1"
              width="42"
              height="42"
              rx="9"
              stroke="#F4F2F2"
              strokeWidth="2"
            />
            <path
              d="M19.9167 15.3335L23.6667 18.6668L27.8467 16.2127L25.75 20.7502L29.5 24.0835L24.5 23.6668L22.625 27.8335L21.5834 23.2502L16.5834 22.8335L20.9617 20.1877L19.9167 15.3335Z"
              fill="#667085"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.3334 29.5083L21.5834 23.25"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
            />
          </svg>
        </IconButton>
      </div>

      <ul className="mt-4 flex flex-col gap-5">
        {[...Array(10)].map((_, i) => (
          <ShipsRow key={i} />
        ))}
      </ul>
    </div>
  );
}

export default Ships;
