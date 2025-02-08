function TruckStatus({ status }) {
  return (
    <div
      className="flex items-center gap-2 justify-center w-fit h-fit rounded-2xl"
      style={{
        padding: "5px 8px",
        background: status === "OnService" ? "#ECFDF3" : "  #FEE2E2",
      }}
    >
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="4"
          cy="4"
          r="3"
          fill={status === "OnService" ? "#12B76A" : "#FF2020"}
        />
      </svg>
      <span
        className="text-center  text-xs font-medium  capitalize shrink-0"
        style={{ color: status === "OnService" ? "#027A48" : "#7F1D1D" }}
      >
        {status}
      </span>
    </div>
  );
}

export default TruckStatus;
