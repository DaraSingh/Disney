import React from "react";
import logo from "../assets/Images/logo.png";
import { useState } from "react";
// import {HiHome,HiMagnifyGlass} from "react-icons/hi2"
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
  const [toggle,setToggle]=useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />

        <div className="hidden md:flex items-center gap-5">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="md:hidden flex items-center gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={" "} Icon={item.icon} />
          )}
        </div>
        <div className="md:hidden flex" onClick={()=>setToggle(!toggle)}>
          <HeaderItem name={" "} Icon={HiDotsVertical} />
          {toggle ? <div className="absolute mt-6 bg-[#121212] border-[1px] border-gray-700 p-3 hover:underline-offset-8 mb-2 px-5 py-4" >
            {menu.map(
              (item, index) =>
                index >= 3 && <HeaderItem name={item.name} Icon={item.icon} />
            )}
          </div>:null}
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full "
      />
    </div>
  );
}

export default Header;
