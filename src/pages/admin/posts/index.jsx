import React from 'react'
import useFetch from '../../../hooks';

const Posts = () => {
  const { data, loading, error } = useFetch("/posts")
  console.log(data);
  let table = data?.posts.map(el => (
    <>
    <tr key={el.id}>
      <td>{el.id}</td>
      {/* <td className='table__tbody__img'>
        <img src={el.images[0]} alt=""/>
      </td> */}
      <td>{el.title}</td>
      <td>{el.reactions}</td>
      <td>{el.tags[0]}</td>
      <td>${el.userId}</td>
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
              {/* <th>Images</th> */}
              <th>Title</th>
              <th>Reactions</th>
              <th>Tags</th>
              <th>User id</th>
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

export default Posts