import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const API = "http://localhost:3000";

function AddProduct() {
  let { register, handleSubmit, reset } = useForm();
  let [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(false);
  const [categories, setCategories] = useState([]);

  //show hide button
  let [show , setShow]= useState(false)

  //fetch categories from database
  const categoriesData = async (req, res) => {
    try {
      let response = await axios.get(`${API}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProduct = async () => {
    try {
      let result = await axios.get(`${API}/products`);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  let onsubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        let response = await axios.put(`${API}/products`, data);
        toast.success("product updated successfully");
        reset();
      } else {
        const formdata= new FormData() 
        formdata.append("title", form.title)
        formdata.append("price", form.price)
        formdata.append("image", form.image)
        let response = await axios.post(`${API}/products`, data, {headers:{"Content-Type":" multipart/form-data"}});

        toast.success("product added successfully");

        reset();
      }
      setEditId(false);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBtn = async (id) => {
    try {
      await axios.delete(`${API}/product/${id}`);
      toast.success("product deleted successfully");
      fetchProduct();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const editBtn = (item) => {
    setEditId(item._id);
    reset({
      title: item.title,
      price: item.price,
    });
  };

  useEffect(() => {
    fetchProduct();
    categoriesData();
  }, []);
  console.log(products);
  return (
    <>
      <Dashboard>
        <div className="flex flex-col gap-5">
          <header className="pt-10">
            <h1 className="text-3xl text-center uppercase font-bold text-sky-950">
              Products
            </h1>
          </header>
          <main className="flex-1 flex justify-around gap-5 p-5">
            <div className="max-w-100 flex flex-col gap-5 bg-sky-300/10 shadow-xl p-10 rounded-xl">
              <h1 className="text-center font-mono text-xl">
                Add Products
              </h1>
              <form
                onSubmit={handleSubmit} encType="multipart/form-data"
                className="flex flex-col  gap-2"
              >
                <div className="space-x-2">
                  {" "}
                  <label htmlFor="title" className="block">
                    Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                      {...register('title')}
                    className=" border-2 flex-1 w-full  rounded-xl  py-1 focus:ring-5 focus:ring-sky-500"
                  />
                </div>
                <div className="space-x-2">
                  {" "}
                  <label htmlFor="price" className="block">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                      {...register('price')}
                    className=" border-2 flex-1 w-full  rounded-xl  py-1 focus:ring-5 focus:ring-sky-500"
                  />
                </div>
                <div className="space-x-2">
                  {" "}
                  <label htmlFor="price" className="block">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    {...register('image')}
                    className=" border-2 flex-1 w-full  rounded-xl  py-1 focus:ring-5 focus:ring-sky-500"
                  />
                </div>
                <div className="space-x-2 mb-2">
                  <label htmlFor="categories">Categories</label>
                  <select
                    className="border-2 flex-1  w-full  rounded-xl  py-1 focus:ring-5 focus:ring-sky-500"
                    name="categories"
                    id=""
                  >
                    {categories.map((item) => (
                      <option
                        key={item._id}
                        value={item._id}
                          {...register('category')}
                        name="category"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="border-2 px-4 py-1 rounded-xl focus:ring-5 focus:ring-sky-500 cursor-pointer">
                  {editId ? "Update" : "ADD"}
                </button>
                <button type="reset" onClick={()=>setEditId(false)} className="border-2 px-4 py-1 rounded-xl focus:ring-5 focus:ring-sky-500 cursor-pointer">Clear</button>
              </form>
            </div>
            <div className=" flex-1 bg-sky-300/10 shadow-xl p-5 rounded-xl">
              <div className="w-full max-h-60 overflow-y-auto">
                <table className="w-full border border-sky-950">
                  <caption className="font-mono text-2xl">
                    List of Products{" "}
                  </caption>
                  <thead>
                    <tr>
                      <th className="border">Id</th>
                      <th className="border">Name</th>
                      <th className="border">Price</th>
                      <th className="border">Category</th>
                      <th className="border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(products) &&
                      products.map((item) => (
                        <tr key={item._id} className="text-center">
                          <td className="border">{item._id}</td>
                          <td className="border">{item.title}</td>
                          <td className="border">{item.price}</td>
                          <td className="border">{item.category?.name}</td>
                          <td className="p-2 border ">
                            <div className="flex justify-center gap-5">
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
                              <button
                                className="border px-2 py-1 rounded-xl"
                                onClick={() => setShow(!show)}
                              >
                                {!show ? "Show" : "Hide"}
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

export default AddProduct;
