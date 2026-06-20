import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import { set, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const API = "http://localhost:3000";

function AddCategory() {
  let { register, handleSubmit, reset, setValue } = useForm();
  let [category, setCategory] = useState([]);
  const [editId, setEditId] = useState(false);
  const fetchCategory = async () => {
    try {
      let result = await axios.get(`${API}/categories`);
      setCategory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  let onsubmit = async (data) => {
    try {
      if (editId) {
        let response = await axios.put(`${API}/categories/${editId}`, data);
        toast.success("category updated successfully");
        reset();
      } else {
        let response = await axios.post(`${API}/categories`, data);
        toast.success("category added successfully");
        reset();
      }
      setEditId(false);
      fetchCategory();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBtn = async (id) => {
    try {
      await axios.delete(`${API}/categories/${id}`);
      toast.success("category deleted successfully");
      fetchCategory();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const editBtn = (item) => {
    setEditId(item._id);
    setValue("name", item.name);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <>
      <Dashboard>
        <div className="flex flex-col gap-5">
          <header className="pt-1 0">
            <h1 className="text-3xl text-center uppercase font-bold text-sky-950">
              All Categories
            </h1>
          </header>
          <main className="flex-1 flex justify-around gap-5 p-5">
            <div className="h-80 flex flex-col gap-10 bg-sky-300/20 shadow-xl px-5 py-10 rounded-xl">
              <h1 className="text-center font-mono text-xl">Add New Category </h1>
              <form
                onSubmit={handleSubmit(onsubmit)}
                className="flex flex-col gap-5"
              >
                <input
                  type="text"
                  {...register("name")}
                  className=" border-2 flex-1  w-full rounded-xl px-4 py-1 focus:ring-5 focus:ring-sky-500"
                />

                <button className="border-2 px-4 py-1 rounded-xl focus:ring-5 focus:ring-sky-500 cursor-pointer">
                  {editId ? "update" : "Add"}
                </button>
                <button type="reset" onClick={()=>setEditId(false)} className="border-2 px-4 py-1 rounded-xl focus:ring-5 focus:ring-sky-500 cursor-pointer">Clear</button>
              </form>
            </div>
            <div className="flex-1  bg-sky-300/20 shadow-xl p-5 rounded-xl">
              <caption className="block font-mono text-2xl">List of Category</caption>
              <div className="w-full max-h-50 overflow-y-auto ">
                <table className="w-full border-collapse border-sky-950 ">
                  <thead className="sticky top-0 bg-sky-600">
                    <tr>
                      <th className="border">Id</th>
                      <th className="border">Name</th>

                      
                      <th className="border">Action</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {Array.isArray(category) &&
                      category.map((item) => (
                        <tr key={item._id} className="text-center">
                          <td className="border">{item._id}</td>
                          <td className="border">{item.name}</td>
                          <td className="p-2 border ">
                            <div className="flex justify-center gap-5">
                              <button
                                onClick={() => editBtn(item)}
                                className="border  px-2 py-1 rounded-xl bg-green-700"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteBtn(item._id)}
                                className="border px-2 py-1 rounded-xl bg-red-700/50"
                              >
                                Delete
                              </button>
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

export default AddCategory;
