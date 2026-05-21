import React from "react";
import { CiMail, CiTwitter } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { PiTiktokLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <>
      <div className="bg-amber-400 max-w-full">
        <div className="mx-auto max-w-[1400px] flex max-lg:flex-col justify-between items-center px-2 text-white">
          <div className="flex justify-center items-center flex-wrap gap-4 w-full lg:w-auto">
            <Link className="flex items-center gap-2 p-1 hover:text-sky-300">
              <LuMapPin />

              <p className="">kirtipur, kathmandu, Nepal</p>
            </Link>
            <Link className="flex items-center gap-2 p-1 hover:text-sky-300">
              {" "}
              <FiPhone />
              <p className="">+977 9868892772</p>
            </Link>
            <Link className="flex items-center gap-2 p-1 hover:text-sky-300">
              {" "}
              <CiMail />
              <p className="">atitdt00@gmail.com</p>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 p-1 max-md:hidden">
            <Link className=" bg-amber-300 p-4 transition duration-75 ease-in-out hover:bg-sky-300">
              <SlSocialFacebook />
            </Link>
            <Link className="bg-amber-300 p-4 hover:bg-sky-300">
              <CiTwitter />
            </Link>
            <Link className="bg-amber-300 p-4 hover:bg-sky-300">
              <PiTiktokLogoLight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
