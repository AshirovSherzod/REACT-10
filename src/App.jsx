import React from 'react'
import "./App.scss"
import Home from "./pages/home/Home"
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/not-found/NotFound'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Posts from './pages/admin/posts'
import Product from './pages/admin/Products'
import Users from './pages/admin/users'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/' element={<Auth/>}>
            <Route path='admin' element={<Admin/>}>
              <Route path='create' element={<Product />}/>
              <Route path='manage' element={<Users />}/>
              <Route path='statistic' element={<Posts />}/>
            </Route>
          </Route>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <ToastContainer />
    </>
  )
}

export default App