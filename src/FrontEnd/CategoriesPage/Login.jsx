import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  let { register, handleSubmit, reset } = useForm();
  const onsubmit = (data) => {
    console.log(data);
    if (data.username !== "" && data.password !== "") {
      navigate("/dashboard");
    }else{
      alert("Enter your username & password")
    }
  };
  return (
    <>
      <div className="bg-amber-300/70 max-w-full">
        <div className="mx-auto flex justify-center items-center h-screen max-w-[1400px] ">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className=" backdrop-blur-sm inset-2 flex flex-col gap-3 p-10 rounded shadow-xl/30">
              <h1 className="text-lg font-medium text-center ">Login Page</h1>
              <label htmlFor="username">Username</label>
              <input
                className="border rounded px-10 py-2"
                type="text"
                id="username"
                placeholder="Username"
                {...register("username")}
              />
              <label htmlFor="password">Password</label>
              <input
                className="border rounded px-10 py-2"
                type="password"
                id="password"
                placeholder="Password"
                {...register("password")}
              />
              <button
                className="rounded px-10 py-2 hover:bg-amber-300/30 hover:text-white cursor-pointer"
                type="submit"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
