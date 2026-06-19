import React from "react";
import Dashboard from "../Dashboard";

let inputTypes = [
  {label:"Image", type: "file", style:"bg-amber-500/20 file:border-0 file-violet-50 file:text-yellow-700 file:text-md " },
  { label:"Title",type: "text"  ,style:""},
  { label:"Description",type: "text" ,style:""},
  { label:"Date", type: "date",style:"" },
];

function FeatuesData() {
  return (
    <>
      <Dashboard>
        <div className="mx-auto h-full flex flex-col items-center gap-5 p-10">
         <header><h1 className="text-2xl uppercase font-bold">Your Are Posting Features </h1></header>
          <main className="">
            <form >
            {inputTypes.map((a, index) => (
              <div key={index} className="">
                <label className="block ">{a.label}</label>
                <input
                  className={`bg-amber-500/20 outline-none rounded p-2 m-2 ${a.style || ""}`}
                  type={a.type}
                />
              </div>
            ))}
            <button className="bg-amber-500/20 outline-none rounded p-2 m-2">submit</button>

          </form>
          </main>
        </div>
      </Dashboard>
    </>
  );
}

export default FeatuesData;
