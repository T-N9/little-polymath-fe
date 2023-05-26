import React from "react";
/* Image */
import { mainLogo } from "../../assets/index";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1 flex items-center gap-3">
        <img src={mainLogo} className="w-[40px] h-[40px]" />
        <h1 className="normal-case text-xl font-bold">
          Little Polymath FE
        </h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
