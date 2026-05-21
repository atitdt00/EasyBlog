import React, { useState } from "react";
import Dashboard from "../Dashboard";
import { useForm } from "react-hook-form";
import axios from "axios";
const API = "https://dummyjson.com/products";

function AddCategory() {
  let { register, handleSubmit } = useForm();
  let [category, setCategory] = useState();
  let onsubmit = async (data) => {
    console.log(data);
    if (data.category.trim() !== "") {
      try {
        let result = await axios.post(`${API}/add`, data);
        setCategory(result.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter a category");
    }
  };

  let fetchData = async () => {
    try {
      let result = await axios.get(`${API}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dashboard>
        <div>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="flex flex-col lg:flex-row items-center gap-10 p-20">
              <input
                type="text"
                className="border rounded px-10 py-2 flex-1 outline-none"
                id="category"
                placeholder="type any category name"
                {...register("category")}
              />
              <button
                className="border rounded px-10 py-2 hover:bg-amber-300/100"
                type="submit"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </Dashboard>
    </>
  );
}

export default AddCategory;
