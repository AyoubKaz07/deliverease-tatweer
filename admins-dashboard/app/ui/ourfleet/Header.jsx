import NotificationDialog from "../notification-dialog";
import ProfileDialog from "../profile-dialog";
import AddNewShippingButton from "../Buttons/add-new-delivery";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  return (
    <header className="  px-6 md:px-12 justify-between items-center flex   h-[90px] py-2 max-[768px]:border-[2px] max-[768px]:border-b-[solid] max-[768px]:border-[#F0F0F0] max-[768px]:bg-[rgba(240, 240, 240, 1)] ">
      <div className=" hidden md:block owner-name">
        <p className="text-3xl text-[rgba(32,128,226,1)] font-semibold leading-9">
        Our Fleet
        </p>
      </div>
      <div className="md:hidden">
        <MenuIcon fontSize="medium" color="primary" />
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
