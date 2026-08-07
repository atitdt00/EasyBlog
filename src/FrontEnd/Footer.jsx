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
      <div className="w-full">
        <div className="bg-[#393535] w-full min-h-96 text-white text-2xl flex flex-col justify-center items-center md:flex-row md:gap-10  gap-3 lg:p-20 p-10">
          <div className="w-full flex flex-col max-sm:items-center gap-5">
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
          <div className="w-full flex flex-col max-sm:items-center gap-5">
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
          <div className="w-full flex flex-col max-sm:items-center gap-5">
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
          <div className="w-full flex flex-col md:gap-5">
            <div className="w-full max-w-md flex items-center">
              <input
                type="text"
                className="bg-white w-full max-w-50 placeholder:text-black md:px-6 md:py-2 text-black outline-none"
                placeholder="search"
              />
              <button className="w-full max-w-10 place-items-center bg-amber-300 px-1 md:px-6 py-1 md:py-3 hover:cursor-pointer">
                <IoSearch />
              </button>
            </div>
            <h1 className="w-full text-2xl font-bold">Tags</h1>
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
        <div className="bg-amber-950 min-h-20 w-full max-w-screen">
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
