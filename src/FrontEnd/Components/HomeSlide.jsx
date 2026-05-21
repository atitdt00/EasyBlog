import React from "react";
import { HiBackward } from "react-icons/hi2";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide } from "../../Layout/imageSlice";

function HomeSlide() {
  const dispatch = useDispatch()
     const { images, currentindex}= useSelector((state)=> state.images)

  return (
    <>
      <div className="max-w-full bg-gray-100 overflow-hidden">
        <div className="group relative bg-cover bg-center bg-no-repeat lg:h-screen h-[80vh] sm:h-screen md:h-[120vh]" style={{backgroundImage: `url()`}}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:max-w-150  md:max-h-130  inset-0 bg-white/50 text-black rounded">
            <div className="flex flex-col items-center h-full px-3 py-5">
              <h1 className="text-[10px] sm:text-xl text-wrap md:text-2xl lg:text-3xl font-bold leading-tight hover:text-amber-300">Fox trottling Through Brooklyn</h1>
              <p className="py-6 md:text-lg text-[10px] sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quia accusantium cum, et rem minus.
              </p>
              <button className="rounded bg-amber-400 px-8 max-sm:px-4 max-sm:py-2 py-4 text-white hover:bg-black hover:cursor-pointer transition duration-300 text-[10px] sm:text-base   font-semibold">Read more..</button>
            </div>
          </div>
          <div className="absolute top-60 -left-20 group-hover:left-20 transition-all duration-500 z-10  bg-black/70 hover:bg-amber-300">
               <button className="font-bold text-white text-3xl p-5" onClick={()=>dispatch(prevSlide())} ><IoMdArrowRoundBack /></button> 
          </div>
          <div className="absolute top-60 -right-20 group-hover:right-20 transition-all duration-500 z-10 bg-black/70 opacity-50 hover:bg-amber-300">
            <button className="font-bold text-white text-3xl p-5 "  onClick={()=>dispatch(nextSlide())}><IoMdArrowRoundForward /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSlide;
