import { LineChart } from "@mui/x-charts";

function Line_chart() {
  const xLabels = [
    "08h",
    "10h",
    "12h",
    "14h",
    "16h",
    "18h",
    "20h",
    "22h",
    "00h",
  ];

  return (
    <div className="w-full h-[380px] relative rounded-2xl border-[2px] border-[solid] border-[#F4F2F2]  bg-white  p-6  md:col-span-4">
      <h2 className={` text-lg md:text-xl font-semibold text-[#2080E2] `}>
        Delivery Timeline
      </h2>
      <span className="text-[#4F4F4F] text-xs  font-normal">
        Deliveries timeline over the day
      </span>
      {/* NOTE: Uncomment this code in Chapter 7 */}

      <div className="left-0">
        <LineChart
          height={300}
          className="w-full  -mt-2 -ml-4"
          xAxis={[
            {
              scaleType: "band",
              data: xLabels,
              color: "#2080E2",
            },
          
          ]}
          series={[
            {
              data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
              color: "#2080E2",
            },
          ]}
          yAxis={[{ min: 0, max: 100, tickNumber: 5 }]}
          grid={{ vertical: true, horizontal: true }}
        />
      </div>
    </div>
  );
}

export default Line_chart;
