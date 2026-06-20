import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import  { MdOutlineMenu } from 'react-icons/md'
import axios from "axios";
const API = "http://localhost:3000"

function Navbar() {
      let [show, setShow] = useState(false)
    let [data, setData]= useState([])
  let fetchCategories=async()=>{
    try{
        let response= await axios.get(`${API}/categories`)
        setData(response.data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchCategories()
  },[])
  return (
    <>
      <ul className='flex items-center justify-between max-md:hidden min-h-auto gap-5 p-2'>
        <li><Link to={`/`}>Home</Link></li>
        {data.map((cate)=>(
          <li key={cate._id}><HashLink to={`#${cate.name.toLowerCase()}`}>{cate.name}</HashLink></li>
        ))}
        <li><Link to={`/login`}>Login</Link></li>
      </ul>
      <div className="md:hidden relative">
       <button onClick={()=>setShow(!show)}> <MdOutlineMenu /></button>
       <ul className={`absolute left-0 top-full bg-sky-500/50 flex flex-col  min-h-auto gap-2 p-2 overflow-hidden transition-all duration-500 ease-in-out ${show ? "max-h-96 opacity-100 visible": "max-h-0 opacity-0 invisible"}`}>
        <li><Link to={`/`}>Home</Link></li>
        {data.map((cate)=>(
          <li key={cate._id}><HashLink to={`#${cate.name.toLowerCase()}`}>{cate.name}</HashLink></li>
        ))}
        <li><Link to={`/login`}>Login</Link></li>
      </ul>
      </div>
    </>
  )
}

export default Navbar
