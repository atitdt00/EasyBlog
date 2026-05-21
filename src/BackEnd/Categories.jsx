import React from "react";
import { Link } from "react-router-dom";

let pages= [ "Add Category", "News", "Latest News", "Featured Post"]

function Categories() {
  return (
    <>
      <div className="mx-auto max-w-full ">
        <div className="">
          <div className="underline">
            <h1 className="font-medium tracking-wider px-2 py-1 text-center">
              List Of Categories
            </h1>
          </div>
          {pages.map((a ,index)=>(
          <ul key={index} className="px-5 py-3">
            <li>
              <Link to={`/addcategory`}>{a}</Link>
            </li>
          </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
