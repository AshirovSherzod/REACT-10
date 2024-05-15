import React, {memo} from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import "./Sidebar.scss"


const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogOut = ()=>{
        localStorage.clear()
        navigate("/")
    }
  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={logo} alt="" />
        <h2>Dashboard</h2>
      </div>
        <ul className="sidebar__collection">
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"create"}>Products</NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"manage"}>Users</NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"statistic"}>Posts</NavLink>
          </li>
        </ul>
        <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default memo(Sidebar)