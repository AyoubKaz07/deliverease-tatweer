import SideNav from "../ui/dashboard/sidenav";
import Header from "../ui/shipping/Header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-[#F9F9FC] flex-col md:flex-row md:overflow-hidden">
      <div className=" hidden lg:block  md:w-[102px] relative flex-none">
        <SideNav />
      </div>
      <div className="flex-grow filter  peer-hover:blur-[3px] md:overflow-y-auto  ">
        <Header />

        <div className="px-6  py-6 md:px-12 md:py-6">{children}</div>
      </div>
    </div>
  );
}
