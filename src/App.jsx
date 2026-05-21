import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './FrontEnd/Home'
import Login from './FrontEnd/CategoriesPage/Login'
import Dashboard from './BackEnd/Dashboard'
import Categories from './BackEnd/Categories'
import AddCategory from './BackEnd/Components/AddCategory'

function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addcategory' element={<AddCategory/>}/>
       </Routes>
    </>
  )
}

export default App
