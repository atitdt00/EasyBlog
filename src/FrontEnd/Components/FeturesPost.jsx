import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../Layout/Api";


function FeturesPost() {

    let {featuredpost}= useContext(ApiContext) || [];

  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-15 min-lg:h-180 bg-gray-200 ">
        <div className="mx-auto  max-w-full flex flex-col items-center gap-10">
          <div>
            <h1 className="text-center font-bold text-4xl"> Featured Post</h1>
          </div>
          <div className="mx-auto grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center p-5 w-full max-sm:w-40">
            {featuredpost.length > 0 &&
              featuredpost.map((pic) => (
                <div
                  key={pic.id}
                  className="max-w-120 flex flex-col flex-wrap justify-center bg-gray-50"
                >
                  <img
                    src={pic.download_url}
                    alt="image"
                    className="bg-center bg-cover bg-no-repeat aspect-10/7"
                  />
                  <Link className=" bg-amber-400 w-40 mt-3 ml-3 p-0.5 text-center text-white hover:bg-amber-950">November 13, 2020</Link>
                  <Link className="w-50 text-2xl my-4 mx-3 font-bold text-center hover:text-amber-300">Buschwick Babes</Link>
                  <p className="mb-2 ml-4 font-stretch-extra-expanded">
                    It is a long established fact that a reader will be
                    distracted…
                  </p>
                </div> 
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeturesPost;
