import React, { useEffect, useState } from 'react'
import Products from '../../components/products/Products';
import axios from '../../api';
import useFetch from '../../hooks';
import { useNavigate } from 'react-router-dom';
import './home.scss'
import { toast } from 'react-toastify';

const Home = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false)

  const handleLogin = e => {
    e.preventDefault()
    let user = {username, password}
    setLoading(true)

    axios 
      .post('/auth/login', user) 
      .then(res => {
        toast.apply("congratulations")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin/create")
      })
      .catch(err => {
        toast.error("username or password is incorrect")
      })
      .finally(() => setLoading(false))
  }

  return (
        <form onSubmit={handleLogin} action="" className='login'>
          <h2>Login</h2>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name=""
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
          />
          <div className="form__btn">
            <button disabled={loading}>{loading ? "Loading..." : "Log in"}</button>
          </div>
        </form>
  );
}

export default Home