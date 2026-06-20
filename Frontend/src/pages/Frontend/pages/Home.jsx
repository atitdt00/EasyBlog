import React, { useEffect, useState } from "react";
import FrontendLayout from "../FrontendLayout";
import axios from "axios";
const API = "http://localhost:3000";

function Home() {
  let [category, setCategory] = useState([]);
  let [products, setProducts] = useState([]);

  let fetchCate = async () => {
    try {
      let response = await axios.get(`${API}/categories`);
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  let fetchProducts = async () => {
    try {
      let response = await axios.get(`${API}/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCate();
    fetchProducts();
  }, []);
  console.log(category);
  console.log(products);

  return (
    <>
      <FrontendLayout>
        <div className="">
          {/*image slider */}
          <section className="max-w-full min-h-40">
            <img
              src="https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=j33jrc6Hqo3JnbjWCUw-xEK40HdJIzHKyS7YzIqXML8="
              alt="electronics"
            />
          </section>

          {/*list of categories item */}
          {category.map((item) => (
            <section
              key={item._id}
              id={item.name.toLowerCase().replace(/\s+/g, "-")}
              className="max-w-full min-h-40"
            >
              <h1 className="text-4xl font-extrabold text-sky-950 text-center">
                {item.name}
              </h1>

              <div className="grid grid-cols-4 gap-4 p-4">
                {products
                  .filter((p) => p.category?._id === item._id)
                  .map((p) => (
                    <div key={p._id} className="border p-2 rounded">
                      <h2>{p.title}</h2>
                      <p>Rs. {p.price}</p>
                    </div>
                  ))}
              </div>

              <hr />
            </section>
          ))}
        </div>
      </FrontendLayout>
    </>
  );
}

export default Home;
