import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../Layout/Api";
import styled from "styled-components";

function LatestPost() {
const { latestpost = [] } = useContext(ApiContext);

  return (
    <>
      <div className="w-full min-h-96 bg-gray-200 p-5">
        <div>
          <h1 className="text-center text-4xl font-bold p-3">Latest Post</h1>
        </div>
        <div className=" mx-auto w-full py-20  min-w-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
          {latestpost.map((a) => (
            // <div key={a.id} className="max-w-150 bg-gray-50 flex flex-col">
            //   <img src={a.download_url} alt="image" className="bg-center bg-cover bg-no-repeat aspect-10/7" />
            //   <Link className= "w-40 text-white text-center bg-amber-300 p-0.5 mt-3 ml-3 hover:bg-amber-950">November 13, 2020</Link>
            //   <Link className="w-50 font-bold mx-3 my-4 text-2xl hover:text-amber-300">Lace in Louisiana</Link>
            //   <p className="mb-4 ml-4 font-stretch-extra-expanded">It is a long established fact that a reader will be distracted by the readable…</p>
            // </div>
            <article key={a.id} className="w-full max-w-72 bg-gray-100 flex flex-col shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-10 h-10 text-gray-300 bg-gray-600 rounded-full p-1"
              >
                <path
                  d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                />
              </svg>
              <img
                src={a.download_url}
                alt="image"
                className="w-full bg-center bg-cover bg-no-repeat aspect-[10/7] rounded"
              />
              <Link className="w-50 text-white text-center bg-amber-300 p-0.5 mt-3 ml-3 hover:bg-amber-950">
                November 13, 2020
              </Link>
              <Link className="w-50 font-bold mx-3 my-4 text-2xl hover:text-amber-300">
                Lace in Louisiana
              </Link>

              <p className="text-sm w-full text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget massa interdum, rhoncus ex dignissim, ultricies
                tellus. Proin convallis mauris ut est pulvinar aliquet. Nulla
                facilisi.
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestPost;
