import React from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";

function Dashboard({ children }) {
  return (
    <>
      <div className="bg-amber-300/70 min-h-[100dvh] flex flex-col ">
        <div className="shadow-xl/30 w-full py-6 px-3">
          <Link
            to={`/dashboard/`}
            className="max-w-full h-2 font-bold text-gray-700 text-2xl"
          >
            DASHBOARD
          </Link>
        </div>
        <div className="max-w-[1600px] w-full flex flex-col md:flex-row gap-5 p-5">
          <div className="backdrop-blur-md  shadow-xl/50  w-full md:w-[350px] md:h-[550px] h-auto p-5 rounded-xl">
            <Categories />
          </div>
          <div className="flex-1 px-0 md:px-5">
            <div className="w-full h-full">
              <div className="lg:max-w-[1400px]  backdrop-blur-lg shadow-xl/30 min-h-[550px] rounded-xl shadow-xl/50">
            {children ? (
                  children
                ) : (
                  
                  <div className="min-h-[550px] flex justify-center items-center">
                    <h1 className="text-2xl">My Dashboard</h1>
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
