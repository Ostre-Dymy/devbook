import React, { useState } from "react";
import { GiHamburgerMenu  } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import {FaUserFriends, FaFlag} from "react-icons/fa"
import {BsFillCalendarEventFill} from "react-icons/bs"
import {TiGroup} from "react-icons/ti"

export const Burger = () => {
  const [open, setOpen] = useState(false);
  const handleBurgerClick = () => setOpen(!open);
  return (
    <>
      {!open ? (
        <GiHamburgerMenu
          onClick={handleBurgerClick}
          className="p-2 ml-4 rounded-full cursor-pointer text-brand-rebbecca"
          size={40}
        />
      ) : (
        <IoClose
          onClick={handleBurgerClick}
          className="p-2 ml-4 rounded-full cursor-pointer text-brand-rebbecca"
          size={40}
        />
      )}
      <ul
        className={`transition-[right] ease-in-out absolute duration-300 ${
          open ? "right-0" : "right-[-300px]"
        } py-2 pl-10 bg-white shadow-xl pr-14 rounded-bl-md top-full text-lg`}
      >
        <li className="flex items-center my-4 cursor-pointer select-none hover:text-brand-rebbecca">
          <FaUserFriends size={24} className="mr-4"/>Friends
        </li>
        <li className="flex items-center my-4 cursor-pointer select-none hover:text-brand-rebbecca">
          <BsFillCalendarEventFill size={24} className="mr-4"/>Events
        </li>
        <li className="flex items-center my-4 cursor-pointer select-none hover:text-brand-rebbecca">
          <TiGroup size={24} className="mr-4"/>Groups
        </li>
        <li className="flex items-center my-4 cursor-pointer select-none hover:text-brand-rebbecca">
          <FaFlag size={24} className="mr-4"/>Pages
        </li>
      </ul>
    </>
  );
};
