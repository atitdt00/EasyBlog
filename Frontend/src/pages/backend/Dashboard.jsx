import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard({ children }) {
  return (
    <>
      <div className=" max-w-full min-h-[100dvh]">
        <div className="w-full min-h-screen flex flex-col">
          <header className=" bg-linear-to-t from-sky-300 to-indigo-500 max-w-full min-h-30 flex justify-center items-center">
            <Link to={`/dashboard`} className="block text-4xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-800">
              Shopping Bazar Admin
            </Link>
          </header>
          <div className=" flex flex-col md:flex-row flex-1 w-full">
            <aside className="w-full md:w-64 bg-sky-300/60">
              <Sidebar />
            </aside>
            <main className="flex-1 bg-sky-300/40 w-full">
              {children ? (
                children
              ) : (
                <div className="h-[calc(100vh-30vh)] flex justify-center items-center">
                  <h1 className="font-climatCrisis text-5xl uppercase">
                    Welcome to the Shopping Bazar
                  </h1>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
