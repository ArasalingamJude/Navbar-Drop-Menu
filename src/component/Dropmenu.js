import React, { useState } from "react";
import profile from "../assets/profile2.jpg";
import user from "../img/user.png";
import edit from "../img/edit.png";
import inbox from "../img/envelope.png";
import settings from "../img/settings.png";
import help from "../img/question.png";
import logout from "../img/log-out.png";

const Dropmenu = () => {
  // const [open, setOpen] = useState(false);

  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

  return (
    <div className="menu-container">
      <div
        className="menu-trigger absolute top-2 right-2 h-12 w-12 rounded-full overflow-hidden cursor-pointer"
        onClick={() => showSideMenu()}
      >
        {isSideMenuOpen ? (
          <img src={profile} alt="profile"></img>
        ) : (
          <img src={profile} alt="profile"></img>
        )}
      </div>
      {isSideMenuOpen ? SideMenu() : ""}
    </div>
  );
};

function SideMenu() {
  return (
    <div
      className={`dropdown-menu absolute top-24 right-5 bg-slate-100 p-5 w-52`}
    >
      <h3 className="w-full text-center text-lg py-5 px-0 font-medium text-gray-500 leading-5">
        The Mark
        <br />
        <span className="text-sm text-gray-400 font-normal">Engineer</span>
      </h3>
      <ul className="py-2.5 px-0  hover:text-red-500 cursor-pointer ">
        <DropdownItem
          className="hover:text-red-500"
          img={user}
          text={"My Profile"}
        />
        <DropdownItem img={edit} text={"Edit Profile"} />
        <DropdownItem img={inbox} text={"Inbox"} />
        <DropdownItem img={settings} text={"Settings"} />
        <DropdownItem img={help} text={"Helps"} />
        <DropdownItem img={logout} text={"Logout"} />
      </ul>
    </div>
  );
}

export default Dropmenu;

function DropdownItem(props) {
  return (
    <li className="dropdownItem flex py-3 px-0 hover:bg-slate-200 hover:rounded-lg ">
      <img
        className="w-5 mr-3 opacity-50 transition-none ml-2 "
        src={props.img}
        alt="dropdownIcons"
      ></img>
      <a href="!#" className="text-gray-500">
        {props.text}
      </a>
    </li>
  );
}
