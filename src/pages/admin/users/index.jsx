import React, { useState } from 'react'
import useFetch from '../../../hooks'
import Products from '../../../components/products/Products'

const Users = () => {
  let {data, error, loading} = useFetch(`/users`)
  console.log(data);
    let table = data?.users.map(el => (
      <>
      <tr key={el.id}>
        <td>{el.id}</td>
        <td className='table__tbody__img'>
          <img src={el.image} alt={el.firstName}/>
        </td>
        <td>{el.firstName} {el.lastName}</td>
        <td>{el.gender}</td>
        <td>{el.email}</td>
        <td>${el.birthDate}</td>
      </tr>
      </>
    ))
    console.log(data);
    return (
      <>
        {/* <div>{table}</div> */}
        <div className="wrapper">
        <h1>Users</h1>
          <table className='table'>
            <thead className='table__thead'>
              <tr className='table__row'>
                <th>T/r</th>
                <th>Image</th>
                <th>Full Nmae</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Birth Date</th>
              </tr>
            </thead>
            <tbody className='table__tbody'>
             {table}
            </tbody>
  
          </table>
        </div>
      </>
    )
}

export default Users