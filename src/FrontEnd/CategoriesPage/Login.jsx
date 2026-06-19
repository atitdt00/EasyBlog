import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  let { register, handleSubmit, reset } = useForm();
  const onsubmit = (data) => {
    console.log(data);
    if (data.username == "admin" && data.password == "1234") {
      navigate("/dashboard");
    }else{
      alert("invalid Creadential")
    }
  };
  return (
    <>
      <div className=" max-w-full">
        <div className="mx-auto flex justify-center items-center h-screen max-w-[1400px] ">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className=" backdrop-blur-sm bg-amber-300/70 inset-2 p-5 rounded shadow-2xl/50 text-white">
              <h1 className="text-3xl font-bold  text-center tracking-widest ">WELCOME BACK</h1>
              <div className="flex flex-col gap-5 p-10 ">
                <label className="font-label text-xl" htmlFor="username">Username</label>
              <input
                className="rounded px-10 py-2 focus:bg-transparent focus:outline-none "
                type="text"
                id="username"
                placeholder="Username"
                {...register("username")}
              />
              <label className="font-label text-xl" htmlFor="password">Password</label>
              <input
                className="rounded px-10 py-2 focus:bg-none focus:outline-none "
                type="password"
                id="password"
                placeholder="Password"
                {...register("password")}
              />
              <button
                className=" py-2 text-xl font-label outline-none hover:font-bold transition-font duration-500 hover:text-amber-100 cursor-pointer"
                type="submit"
              >
                LOGIN
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
