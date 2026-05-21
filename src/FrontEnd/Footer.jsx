import React from "react";
import { IoCaretForwardSharp, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  let links = {
    categories: ["Art", "Fashion", "Photography", "Travel"],
    RecentPosts: [
      "Lace in Louisiana",
      "A-line in Alabama",
      "Sassy Seattle",
      "Austin Style",
      "Hamptons Hippies",
    ],
    Meta: ["Log in", "Entry feed", "Comments feed", "WordPress.com"],
    Tags: ["Art", "Blog", "Fashion", "Photography", "Travel"],
  };
  return (
    <>
      <div className="">
        <div className="bg-[#000] max-w-full min-h-100 text-white text-2xl flex flex-col max-lg:items-center md:flex-row md:justify-center flex-wrap  lg:justify-evenly gap-5 lg:p-20 p-10">
          <div className="flex flex-col max-sm:items-center gap-5">
            <h1 className="text-2xl font-bold">Categories</h1>
            {links.categories.map((a, index) => (
              <ul key={index} className="text-sm flex flex-col gap-5">
                <li className="group text-lg flex items-center gap-3 hover:text-amber-500 hover:underline">
                  {" "}
                  <span className="group-hover:translate-x-1 transition duration-300">
                    {" "}
                    <IoCaretForwardSharp />
                  </span>
                  {a}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col max-sm:items-center gap-5">
            <h1 className="text-2xl font-bold">Recent Posts</h1>
            {links.RecentPosts.map((a, index) => (
              <ul key={index} className="text-sm flex flex-col gap-5">
                <li className="group text-lg flex items-center gap-3 hover:text-amber-500 hover:underline">
                  {" "}
                  <span className="group-hover:translate-x-1 transition duration-300">
                    {" "}
                    <IoCaretForwardSharp />
                  </span>
                  {a}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col max-sm:items-center gap-5">
            <h1 className="text-2xl font-bold">Meta</h1>
            {links.Meta.map((a, index) => (
              <ul key={index} className="text-sm flex flex-col gap-5">
                <li className="group text-lg flex items-center gap-3 hover:text-amber-500 hover:underline">
                  {" "}
                  <span className="group-hover:translate-x-1 transition duration-300">
                    {" "}
                    <IoCaretForwardSharp />
                  </span>
                  {a}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-full max-w-md flex items-center">
              <input
                type="text"
                className="bg-white placeholder:text-black max-sm:px-1 px-6 max-sm:py-1 py-3 text-black outline-none"
                placeholder="search"
              />
              <button className="bg-amber-300 p-4 max-sm:p-2 hover:cursor-pointer">
                <IoSearch />
              </button>
            </div>
            <h1 className="text-2xl font-bold">Tags</h1>
            <div className="flex flex-wrap gap-5 max-w-50">
              {links.Tags.map((a, index) => (
                <ul key={index} className="text-sm">
                  <li className="border px-2 py-1 hover:bg-amber-400 ">
                    <button className="hover:underline">{a}</button>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-amber-950 min-h-20 max-w-full">
          <div className="flex justify-center items-center w-full min-h-20">
            <h1 className="text-center text-white text-xl">
              Copyright © All rights reserved. Theme Easy Blog by{" "}
              <Link className="hover:text-amber-300 hover:underline transition duration-500">
                Creative Themes
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
