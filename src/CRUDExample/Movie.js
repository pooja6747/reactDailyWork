import React, { useState } from 'react'
import { v4 } from 'uuid';

const Movie = () => {
  const [input, setInput] = useState({ id: "", name: "", year: "", rating: "" });
  const [tableData, setTableData] = useState([])
  const [btn, setBtn] = useState("Save")

  const handleInputFeild = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleFromSubmit = (e) => {
    e.preventDefault();
    if (input.id) {
      updateData()
    } else {
      setTableData([...tableData, { id: v4(), name: input.name, year: input.year, rating: input.rating }])
    }

    clear()

  }

  const handleDelete = (id) => {
    console.log(id, "id")
    const filterData = tableData.filter(el => el.id !== id)
    setTableData(filterData)

  }


  const handleEditData = (item) => {
    console.log("item", item)
    setInput({ id: item.id, name: item.name, year: item.year, rating: item.rating })
    setBtn("Update")
  }

  const clear = () => {
    setInput({ id: '', name: '', year: '', rating: '' })
    setBtn("Save")
  }

  const updateData = () => {
    const updateData = tableData.map(el => el.id === input.id ? input : el);
    setTableData(updateData)
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>Add movie</h1>
            <form onSubmit={handleFromSubmit}>
              <input type='text' className='form-control my-2' value={input.name} placeholder='Enter movie Name' name='name' onChange={handleInputFeild} />
              <input type='text' className='form-control my-2' value={input.year} placeholder='Enter movie Year' name='year' onChange={handleInputFeild} />

              <input type='text' className='form-control my-2' value={input.rating} placeholder='Enter movie Rating' name='rating' onChange={handleInputFeild} />
              <input type="submit" value={btn} className='btn btn-primary btn-lg text-dark' />
            </form>
          </div>

          <div className='col-md-6>'>
            <table className='table'>
              <thead>
                <tr >
                  <th>Movie Name</th>
                  <th>Movie Year</th>
                  <th>Movie Rating</th>
                  <th>Actios</th>
                </tr>
              </thead>
              <tbody>
                {
                  tableData.map((item) => {
                    return (
                      <>
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.year}</td>
                          <td>{item.rating}</td>
                          <td><button onClick={() => { handleEditData(item) }}>Edit</button></td>
                          <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie


// data.map(el => (
//   <tr key={el.id}>
//     <td>{el.name}</td>
//     <td>{el.year}</td>
//     <td>{el.rating}</td>
//     <td><button className='btn btn-dark'>Edit</button></td>
//     <td><button className='btn btn-danger'>Delete</button></td>
//   </tr>
// ))