import React from 'react'
import useFetch from '../../../hooks'
import './products.scss'

const Product = () => {
  const { data, loading, error } = useFetch("/products")

  let table = data?.products.map(el => (
    <>
    <tr key={el.id}>
      <td>{el.id}</td>
      <td className='table__tbody__img'>
        <img src={el.images[0]} alt=""/>
      </td>
      <td>{el.title}</td>
      <td>{el.brand}</td>
      <td>{el.category}</td>
      <td>${el.price}</td>
    </tr>
    </>
  ))
  console.log(data);
  return (
    <>
      {/* <div>{table}</div> */}
      <div className="wrapper">
      <h1>Overview</h1>
        <table className='table'>
          <thead className='table__thead'>
            <tr className='table__row'>
              <th>T/r</th>
              <th>Images</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
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

export default Product