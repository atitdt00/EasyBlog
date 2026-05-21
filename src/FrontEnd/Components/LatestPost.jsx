import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../Layout/Api";

function LatestPost() {
  let {latestpost}=useContext(ApiContext) || [];
  return (
    <>
      <div className="max-w-full min-lg:h-500 bg-gray-200 p-5">
        <div>
          <h1 className="text-center text-4xl font-bold p-3">Latest Post</h1>
        </div>
        <div className=" mx-auto py-20 max-lg:px-50 min-w-30 grid md:grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
            {  latestpost.map(a=>(
            <div key={a.id} className="max-w-150 bg-gray-50 flex flex-col">
              <img src={a.download_url} alt="image" className="bg-center bg-cover bg-no-repeat aspect-10/7" />
              <Link className= "w-40 text-white text-center bg-amber-300 p-0.5 mt-3 ml-3 hover:bg-amber-950">November 13, 2020</Link>
              <Link className="w-50 font-bold mx-3 my-4 text-2xl hover:text-amber-300">Lace in Louisiana</Link>
              <p className="mb-4 ml-4 font-stretch-extra-expanded">It is a long established fact that a reader will be distracted by the readable…</p>
            </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default LatestPost;
