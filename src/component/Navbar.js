import React, { useState } from "react";
import MenuIcon from "../assets/menu.png";
import Dropmenu from "./Dropmenu";
// import CloseIcon from "../assets/close.png";

export default function Navbar() {
  //we use react hooks for toggling the menu
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

  return (
    <div className="fixed flex flex-row justify-between w-full h-16 bg-gray-800 text-white items-center ">
      {/* <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold">
        <li className="menu-list-item px-2">
          <a href="www.google.com">Home</a>
        </li>
        <li className="menu-list-item px-2">
          <a href="www.google.com">About</a>
        </li>
        <li className="menu-list-item px-2">
          <a href="www.google.com">Courses</a>
        </li>
      </ul> */}

      <button onClick={() => showSideMenu()} className="menu-button  mr-0">
        {isSideMenuOpen ? (
          <img src={MenuIcon} className="w-11 h-11 ml-4" alt="close"></img>
        ) : (
          <img src={MenuIcon} className="w-10 h-10 ml-4" alt="menu"></img>
        )}
      </button>
      {isSideMenuOpen ? SideMenu() : ""}

      {/* <div className="band-logo text-xl font-bold px-10">Dashboard</div> */}
      <div>
        <Dropmenu />
      </div>
    </div>
  );
}

function SideMenu() {
  return (
    <div className="fixed h-screen w-1/6 sm:w-1/4  bg-gray-700 top-16 ">
      <ul className="menu-list flex flex-col justify-between text-s font-bold text-left pl-3">
        <li className="menu-list-item  flex py-3 px-0 rounded-lg mt-2 hover:bg-blue-400 hover:text-gray-700">
          <span className="ml-2">
            <ion-icon name="home-outline" size="large"></ion-icon>
          </span>
          <a href="www.google.com" className="pl-3">
            Home
          </a>
        </li>
        {/* <hr className="my-4 text-slate-400"></hr> */}

        <li className="menu-list-item  flex py-3 px-0 rounded-lg  hover:bg-blue-400 hover:text-gray-700">
          <span className="ml-2">
            <ion-icon name="person-outline" size="large"></ion-icon>
          </span>
          <a href="www.google.com" className="pl-3">
            About
          </a>
        </li>

        <li
          className="menu-list-item flex  py-3 rounded-lg m-2 hover:bg-blue-400 hover:text-gray-700"
          onClick="dropdownList()"
        >
          <span className="ml-2">
            <ion-icon name="book-outline" size="large"></ion-icon>
          </span>
          <a href="www.google.com" className="pl-3">
            Courses
          </a>

          <span className="mt-1 ml-[120px] rotate-180" id="arrow">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </span>
        </li>
        <li>
          <div className="text-left text-sm  mt-2 w-4/5 mx-auto" id="submenu">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              ICT
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              E.Tech
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              B.Tech
            </h1>
          </div>
        </li>
        <li className="menu-list-item flex py-3 px-0 rounded-lg m-2 hover:bg-blue-400 hover:text-gray-700">
          <span className="ml-2">
            <ion-icon name="people-outline" size="large"></ion-icon>
          </span>
          <a href="www.google.com" className="pl-3">
            Peoples
          </a>
        </li>
      </ul>
    </div>
  );
}

// function dropdownList = () => {
//   document.querySelector("#submenu").classList.toggle("hidden");
//   document.querySelector("#arrow").classList.toggle("rotate-0");

//   return(
//   );
// };
