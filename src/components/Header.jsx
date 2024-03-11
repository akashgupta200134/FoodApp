import React from "react";
import Logo from "../images/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import Avatar from "../images/avatar.png"

export const Header = () => {
  return (
    <header className=" w-screen fixed z-50  p-6 px-16 ">
      {/* desktop and tablet */}

    <div className=" hidden md:flex w-ful h-full items-center justify-between">
        <div className="flex items-center gap-2 ">
          <img src={Logo} className=" w-8 object-cover " alt="logo"></img>
          <p className=" text-headingColor text-xl font-bold">HenHaven</p>

        </div>

        <div className=" flex  items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor  cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor  cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor  cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              About Us
            </li>
            <li className="text-base text-textColor  cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
              Services
            </li>
          </ul>

          <div className="relative  flex items-center justify-center ">
            <MdShoppingBasket className=" text-textColor text-2xl cursor-pointer" />

            <div className=" absolute -top-2 -right-2  w-5 h-5  rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold ">2</p>
            </div>
          </div>
  
           <img src={Avatar} className="w-10 min-w-[40px h-10 min-h-[40px]  shadow-2xl rounded-full "></img>
           

        </div>
      </div>




















      {/* mobile */}

      <div className=" flex md:hidden w-full h-full"></div>
    </header>
  );
};