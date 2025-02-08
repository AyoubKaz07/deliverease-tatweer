import NotificationDialog from "./notification-dialog";
import ProfileDialog from "./profile-dialog";
import AddNewShippingButton from "./Buttons/add-new-delivery";
function Header() {
  return (
    <header className=" px-6 md:sticky md:right-0 md:top-0 z-[2] md:px-12 border-[2px] border-b-[solid] border-[#F0F0F0]  justify-end md:justify-between items-center flex bg-white  h-[90px] py-2">
      <div className=" hidden md:block owner-name">
        {/* {children ? children : <span>Welcome</span>} */}
        <span className="text-xl font-normal">
          Welcome in <span className="text-[#2080E2] ">Delivery Express</span>
        </span>
        {/* {children ? null : <br />} */}
        <br />

        {/* {children ? null : <div>Mr. {ownername}</div>} */}
        <div className="text-2xl text-[#2080E2] font-semibold leading-9">
          Mr. MOSTEFAI mounir
        </div>
      </div>
      <div className="flex items-center gap-7">
        <AddNewShippingButton />
        <NotificationDialog />
        <ProfileDialog />
      </div>
      {/* <Profile /> */}
    </header>
  );
}

export default Header;
