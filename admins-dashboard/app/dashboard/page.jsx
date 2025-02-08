import { Suspense } from "react";
import { CardSkeleton, RevenueChartSkeleton } from "../ui/skeletons";
import Line_chart from "../ui/dashboard/line-chart";
import Bars_chart from "../ui/dashboard/bars-chart";
import CardWrapper from "../ui/dashboard/cards";
import Recent_Deliveries from "../ui/dashboard/recent-deliveries";
import { poppins } from "../ui/fonts";

export default async function Page() {
  return (
    <main className={poppins.className}>
      <h1
        className={`mb-4 font-semibold leading-8 text-[rgba(32,128,226,1)] uppercase text-xl md:text-2xl`}
      >
        Dashboard overview
      </h1>
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  xl:grid-cols-5">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <Line_chart />
        </Suspense>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <Bars_chart />
        </Suspense>
      </div>
      <div className="mt-6">
        <Recent_Deliveries />
      </div>
    </main>
  );
}
