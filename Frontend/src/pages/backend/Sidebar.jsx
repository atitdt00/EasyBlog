import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbCategory } from "react-icons/tb";

const categories = [
  {
    name: "ADD Category",
    link: "/admin/addCategory",
  },
  {
    name: "Add Product",
    link: "/admin/addproduct",
  },
  {
    name: "User",
    link: "/admin/user",
  },

 
];

function Sidebar() {
     let navigate= useNavigate()
  let handleLogout=()=>{
    console.log('gvghghds')
 
    sessionStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <>
      <div className="p-2">
        <header className="border-b-3 rounded flex items-center justify-center gap-3 m-2">
          {" "}
          <i>
            <TbCategory />
          </i>
          <h1 className=" px-3 py-1 tracking-widest text-2xl font-medium">Menu</h1>
        </header>
        <section className="px-5 flex-1 flex flex-col gap-3 mt-2 overflow-y-auto  h-120">
          {categories.map((item, index) => (
            <ul key={index} className="">
              <li className="hover:bg-sky-400/60">
                <Link
                  className="block w-full px-3 py-2 font-climatCrisis opacity-80 hover:opacity-100 hover:font-bold transition"
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            </ul>
          ))}
          <button className="border" onClick={handleLogout}>Logout</button>
        </section>
      </div>
    </>
  );
}

export default Sidebar;
