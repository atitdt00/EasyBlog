import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const API = "http://localhost:3000";
function User() {
    let { register, handleSubmit, reset } = useForm();
  let [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(true);

  //show and hide button
  let [show, setShow]=useState(false)

  const fetchUser = async () => {
    try {
      let result = await axios.get(`${API}/users`);
      setUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  let onsubmit = async (data) => {
    try {
      if (editId) {
        let response = await axios.put(`${API}/user`, data);
        toast.success("product updated successfully");
        reset();
      } else {
        let response = await axios.post(`${API}/user`, data);
        toast.success("product added successfully");

        reset();
      }
      setEditId(false);
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBtn = async (id) => {
    try {
      await axios.delete(`${API}/user/${id}`);
      toast.success("product deleted successfully");
      fetchUser();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const editBtn = (item) => {
    setEditId(item._id);
    reset({
      email: item.email,
      password: item.password,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Dashboard>
    <div className="flex flex-col gap-5">
          <header className="pt-10">
            <h1 className="text-3xl text-center uppercase font-bold text-sky-950">
               UserS
            </h1>
          </header>
          <main className="flex-1 flex flex-col lg:flex-row justify-around gap-5 p-5">
            <div className="max-w-100 flex flex-col gap-5 bg-sky-300/20 shadow-xl p-10 rounded-xl">
              <h1 className="text-center font-mono">Add users </h1>
              <form
                onSubmit={handleSubmit(onsubmit)}
                className="flex flex-col  gap-2"
              >
                <div className="space-x-2">
                  {" "}
                  <label htmlFor="title" className="block">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="title"
                    {...register("email")}
                    className=" border-2 flex-1 w-full  rounded-xl  py-1 focus:ring-5 focus:ring-sky-500"
                  />
                </div>
                <div className="space-x-2">
                  {" "}
                  <label htmlFor="password"className="block">Password</label>
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    className=" border-2 flex-1 w-full  rounded-xl  py-1 focus:ring-5 focus:ring-sky-500"
                  />
                </div>
                <button className="border-2 px-4 py-1 rounded-xl focus:ring-5 focus:ring-sky-500 cursor-pointer">
                  {editId ? "Update" : "ADD"}
                </button>
                <button type="reset" onClick={()=>setEditId(false)} className="border-2 px-4 py-1 rounded-xl focus:ring-5 focus:ring-sky-500 cursor-pointer">Clear </button>
              </form>
            </div>
            <div className=" flex-1 bg-sky-300/20 shadow-xl p-5 rounded-xl">
              <div className="w-full max-h-60 overflow-y-auto">
                <table className="w-full border border-sky-950 table-fixed">
                <caption className="font-mono">List of Users </caption>
                <thead>
                  <tr>
                    <th className="border">Id</th>
                    <th className="border">Email</th>
                    <th className="border">Password</th>
                    <th className="border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(users) &&
                    users.map((item) => (
                      <tr key={item._id} className="text-center">
                        <td className="border overflow-hidden">{item._id}</td>
                        <td className="border">{item.email}</td>
                        <td className="border">{item.password}</td>
                        <td className="p-2 border ">
                          <div className="flex justify-center gap-5 ">
                            <button
                              onClick={() => editBtn(item)}
                              className="border px-2 py-1 rounded-xl bg-green-700"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteBtn(item._id)}
                              className="border px-2 py-1 rounded-xl bg-red-700/50"
                            >
                              Delete
                            </button>
                            <button className="border px-2 py-1 rounded-xl" onClick={()=>setShow(!show)}>{!show ? "Show": "Hide"}</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              </div>
            </div>
          </main>
        </div>
        <ToastContainer />
      </Dashboard>
    </>
  );
}

export default User;
