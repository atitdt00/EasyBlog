import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const API = "https://picsum.photos/v2/list";
export const ApiContext = createContext();

function Api({ children }) {
  const [latestpost, setLatestpost] = useState([]);
  const [featuredpost, setFeaturedpost] = useState([]);

  let featureddata = async () => {
    try {
      let resp = await axios.get(`${API}`);
      setFeaturedpost(resp.data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };
  let latestdata = async () => {
    try {
      let result = await axios.get(`${API}`);
      setLatestpost(result.data.slice(4, 10));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    featureddata();
    latestdata();
    homeSlider();
  }, []);

  //carouse image for homeslider
  const [slider, setSlider] = useState([]);
  const [current, setCurrent] = useState();
  let homeSlider = async () => {
    try {
      let result = await axios.get(`${API}`);
      let mydata = result.data;
      if (mydata.length === 0) return;
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === mydata.length - 1 ? 0 : prev + 1));
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <ApiContext.Provider value={{ featuredpost, latestpost }}>
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export default Api;
