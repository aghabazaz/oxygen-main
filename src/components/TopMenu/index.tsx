"use client";
import MenuItems from "./Items";
import Logo from "./Logo";
import MobileNavBar from "./Mobile";
import SearchAndLanguage from "./SearchAndLanguage";

const TopMenu = () => {
 return (
  <>
   <nav
    className={`w-full hidden lg:sticky lg:block shadow-lg bg-white top-0 z-50 px-0 xl:px-36`}
   >
    <div className="h-20 flex items-center justify-between w-full gap-5 relative  top-0">
     <SearchAndLanguage />
     <MenuItems />
     <div className="w-full md:w-fit flex justify-between px-5 items-center">
      <Logo />
     </div>
    </div>
   </nav>
   {/* Mobile */}
   <MobileNavBar />
  </>
 );
};

export default TopMenu;
