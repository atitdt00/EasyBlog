import React from "react";
import FronendLayout from "../Layout/FronendLayout";
import HomeSlide from "./Components/HomeSlide";
import LatestPost from "./Components/LatestPost";
import FeturesPost from "./Components/FeturesPost";

function Home() {
  return (
    <div>
      <FronendLayout>
          <HomeSlide/>
          <FeturesPost/>
          <LatestPost/>
      </FronendLayout>
    </div>
  );
}

export default Home;
