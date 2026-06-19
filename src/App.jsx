import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./FrontEnd/Home";
import Login from "./FrontEnd/CategoriesPage/Login";
import Dashboard from "./BackEnd/Dashboard";
import Categories from "./BackEnd/Categories";
import AddCategory from "./BackEnd/Components/AddCategory";
import FeatuesData from "./BackEnd/Components/FeatuesData";
import News from "./BackEnd/Components/News";
import LatestData from "./BackEnd/Components/LatestData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/featuresdata" element={<FeatuesData />} />
        <Route path="/news/" element={<News />} />
        <Route path="/latestdata/" element={<LatestData />} />


      </Routes>
    </>
  );
}

export default App;
