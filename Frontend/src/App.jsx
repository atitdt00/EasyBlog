import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/backend/Dashboard'
import Login from './pages/backend/Login'
import Home from './pages/Frontend/pages/Home'
import AddCategory from './pages/backend/Components/AddCategory'
import User from './pages/backend/Components/User'
import AddProduct from './pages/backend/Components/AddProduct'
import ProtectRoute from './pages/backend/ProtectRoute'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin/dashboard' element={<ProtectRoute><Dashboard/></ProtectRoute>}/>
          <Route path='/admin/addcategory' element={<ProtectRoute><AddCategory/></ProtectRoute>}/>
          <Route path='/admin/addproduct' element={<ProtectRoute><AddProduct/></ProtectRoute>}/>
          <Route path='/admin/user' element={<ProtectRoute><User/></ProtectRoute>}/>
        </Routes>
    </>
  )
}

export default App
