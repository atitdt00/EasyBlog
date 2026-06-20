import React from "react";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function FrontendLayout({ children }) {
  return (
    <>
      <div className="mx-auto flex flex-col flex-wrap">
        <header className="sticky top-0 flex-1 flex items-center basis-1 max-w-full min-h-30 bg-sky-500">
          <TopHeader />
        </header>
        <nav className="sticky top-30 flex-1 basis-1 max-w-full min-h-auto bg-sky-500/50">
          <Navbar />
        </nav>
        <main className="flex-1 max-w-full min-h-100 bg-sky-200/50">{children}</main>
        <footer className=" max-w-full min-h-30 bg-sky-900 flex justify-center  items-center ">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default FrontendLayout;
