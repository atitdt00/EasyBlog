import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

let pages = [
  { category: "Add Category", link: "/addcategory/" },
  { category: "News", link: "/news/" },
  { category: "Latest News", link: "/latestdata/" },
  { category: "Featured Post", link: "/featuresdata/" },
];

function Categories() {
  return (
    <>
      <div className="mx-auto max-w-full ">
        <div className="">
          <div className="underline">
            <h1 className="font-extrabold text-2xl tracking-wider px-2 py-1 text-center uppercase">
              List Of Categories
            </h1>
          </div>
          {pages.map((a, index) => (
            <ul key={index} className="px-5 py-3">
              <li className="flex items-center gap-3 group ">
                <i className="transition-all duration-150 group-hover:translate-x-2" ><MdArrowForwardIos /></i>
                <Link className="font-title uppercase hover:font-bold" to={a.link}>{a.category}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
