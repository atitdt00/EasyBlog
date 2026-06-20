import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const API = "http://localhost:3000";
function Login() {
  let navigate = useNavigate();
  let { register, handleSubmit } = useForm();
  let [data, setData] = useState({});
  let onsubmit = async (data) => {
    try {
      let response = await axios.post(`${API}/login`, data);
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
       
        navigate("/admin/dashboard");
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Login failed. Please try again.");
    }
  };
 console.log(sessionStorage.getItem("token"));
  return (
    <>
      <div className="mx-auto min-h-screen flex justify-center items-center ">
        <figure>
          <img src="" alt="" />
        </figure>
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl text-center font-bold mb-6">Login</h1>
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
            <div className="">
              <label className="block mb-1 font-medium text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-400 "
                type="text"
                name="email"
                {...register("email")}
              />
            </div>
            <div className="">
              <label
                className="block mb-1 font-medium text-sm"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-400 "
                type="password"
                name="password"
                {...register("password")}
              />
            </div>
            <div className="flex justify-between ">
              <label htmlFor="remember me" className="hover:cursor-pointer">
                {" "}
                <input type="checkbox" /> Remember me
              </label>
              <label htmlFor="" className="hover:cursor-pointer">
                <Link>forget password?</Link>
              </label>
            </div>
            <button className="w-full bg-sky-500 cursor-pointer text-white py-2 rounded-lg font-semibold transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
