"use client";
import { BarChart } from "@mui/x-charts";
// import { BarChart } from "@mantine/charts";

function Bars_chart() {
  return (
    <div className="w-full h-[380px] relative rounded-2xl border-[2px] border-[solid] border-[#F4F2F2]  bg-white  p-6  md:col-span-4">
      <h2 className={` text-lg md:text-xl font-semibold text-[#2080E2] `}>
        Net Profit Yearly overview
      </h2>
      <span className="text-[#4F4F4F] text-xs  font-normal">
        Net Profit over the year
      </span>
      {/* NOTE: Uncomment this code in Chapter 7 */}

      <div className=" w-full top-[80px] absolute -mt-2 -ml-6">
        <BarChart
          loading={false}
          tooltip={{ trigger: "none" }} // Disables the tooltip
          grid={{ vertical: true, horizontal: true }}
          height={300}
          className="w-full "
          series={[
            { data: [] },
            { data: [] },
            {
              data: [
                500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 2000, 5000,
                1000,
              ],
              color: " #2080E2",
            },
            { data: [] },
            { data: [] },
          ]}
          xAxis={[
            {
              scaleType: "band",
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              tickFontSize: 13,
              tickLabelStyle: { textAnchor: "end", fontWeight: "400" },
            },
          ]}
          yAxis={[
            {
              min: 0,
              max: 8000,
              tickNumber: 8,
              valueFormatter: (v) => (v / 1000).toFixed(0) + "k",
            },
          ]}
          // yAxis={[{ min: 0, max:x[x.length-1], tickNumber: Math.floor(x[x.length-1]/1000)  }]}
        />
        {/* <BarChart
          h={250}
          className="w-full"
          data={[
            { month: "Jan", Laptops: 500 },
            {
              month: "Feb",
              Laptops: 1200,
            },
            { month: "Mar", Laptops: 1000 },
            { month: "Apr", Laptops: 2000 },
            { month: "May", Laptops: 3000 },
            { month: "Jun", Laptops: 4000 },
            { month: "Jul", Laptops: 5000 },
            { month: "Aug", Laptops: 6000 },
            { month: "Sep", Laptops: 7000 },
            { month: "Oct", Laptops: 2000 },
            { month: "Nov", Laptops: 5000 },
            { month: "Dec", Laptops: 1000 },
          ]}
          dataKey="month"
          series={[{ name: "Laptops", color: "blue.6" }]}
          tickLine="y"
        /> */}
      </div>
    </div>
  );
}

export default Bars_chart;
