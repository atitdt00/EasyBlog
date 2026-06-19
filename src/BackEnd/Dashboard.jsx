import React from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";

function Dashboard({ children }) {
  return (
    <>
      <div className=" min-h-[100dvh] text-yellow-800">
        <div className=" w-full py-6 text-center ">
          <Link
            to={`/dashboard/`}
            className="max-w-full h-2 text-yellow-800 font-bold font-title text-4xl"
          >
            DASHBOARD
          </Link>
        </div>
        <div className="max-w-[1600px]  w-full flex flex-col md:flex-row gap-3 py-1">
          <div className="backdrop-blur-md min-h-[37em]  w-full md:w-[350px] md:h-[550px] bg-amber-200 p-5 shadow-[1px_0px_white]">
            <Categories />
          </div>
          <div className="flex-1 px-0 md:px-5 bg-amber-200 ">
            <div className="w-full h-full">
              <div className="lg:max-w-[1400px]   backdrop-blur-lg  min-h-[550px] h-full ">
                {children ? (
                  children
                ) : (
                  <div className="min-h-[550px] flex items-center justify-center p-20">
                    <h1 className="text-2xl font-title font-bold text-4xl bg-amber-900/20  p-10">
                      My Dashboard
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
