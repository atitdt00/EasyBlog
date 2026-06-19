import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
const pages = [
  { page: "Home", link: "" },
  { page: "Art", link: "" },
  { page: "Fashion", link: "" },
  { page: "Photography", link: "" },
  { page: "Travel", link: "" },
  { page: "Blog", link: "" },
  { page: "Login", link: "/login/" },
];
function MainNav() {
  let [showMenu, setShowMenu] = useState(false);
  let [move, setMove] = useState(false);
  return (
    <>
      <div className=" relative bg-amber-100 max-w-full">
        {" "}
        <div className=" mx-auto max-w-[1400px] flex justify-between gap-3 items-center p-5">
          <div className="">
            <h1 className="font-bold font-heading text-4xl text-amber-600 hover:text-amber-400">
              Easy Blog
            </h1>
          </div>
          <div className="hidden lg:flex gap-15 items-center">
            {pages.map((item, index) => (
              <nav key={index} className=" text-lg font-medium text-gray-600 ">
                <Link to={item.link} className=" hover:text-amber-300">
                  {item.page}
                </Link>
              </nav>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => {
                (setShowMenu(!showMenu), setMove(!move));
              }}
              className="text-4xl"
            >
              <IoMdMenu />
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col lg:hidden absolute top-20 z-10 right-0 transition-all duration-500 ease-in-out origin-top ${move ? "max-h-300" : "max-h-0 hidden"}`}
        >
          {showMenu &&
            pages.map((item, index) => (
              <nav
                key={index}
                className="py-3 bg-amber-400/40 hover:bg-amber-600/80 transition-all duration-500"
              >
                <Link
                  to={item.link}
                  className="text-white font-medium text-lg overflow-hidden px-20 "
                >
                  {item.page}
                </Link>
              </nav>
            ))}
        </div>
      </div>
    </>
  );
}

export default MainNav;
