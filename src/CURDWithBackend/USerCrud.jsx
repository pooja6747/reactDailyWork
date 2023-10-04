import React, { useEffect, useState } from 'react'
import axios from 'axios';

const USerCrud = () => {
    const [inputData, setInputData] = useState({ _id: "", name: "", email: "", password: "", mobileNo: "" })
    const [formData, setFormData] = useState([]);
    const [btn, setBtn] = useState("Save")

    const handleInputFeild = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    const handleFormsubmit = (e) => {
        e.preventDefault();
        console.log("input data id",inputData._id)
        console.log("form data id",formData._id)

        if(inputData._id){
            updateUser()
            console.log("id available","updateUser")
        }else{
            console.log("id not available","postUser")
            postUser();
        }
        cls()
    }

    //get Data
    async function getuser() {
        try {
            const res = await axios.get('https://curd-with-api.onrender.com/api/user')
            console.log("res", res)
            const userdata = await res.data;
            setFormData(userdata)
            console.log("data", userdata)
        } catch (error) {

        }
    }


    //post data
    async function postUser() {
        try {
            const { data } = await axios.post('https://curd-with-api.onrender.com/api/user', { name: inputData.name, email: inputData.email, password: inputData.password, mobileNo: inputData.mobileNo });
            console.log("data", data)
            getuser();
        } catch (error) {

        }
    }

     //update data
     async function updateUser(){
        try {
            const {data} = await axios.put(`https://curd-with-api.onrender.com/api/user/${inputData._id}`,inputData._id)
            console.log("data update",data)
            getuser()
        } catch (error) {
            
        }
     }

     // //delete data
     async function handleDelete(id){
        try {
            console.log("delete id",id)
            const {data} = await axios.delete(`https://curd-with-api.onrender.com/api/user/${id}`,id)
            console.log("delete data",data)
            getuser()
        } catch (error) {
            
        }
    }

    //edit
    const handleEditData = (item) => {
        console.log("item", item)
        setInputData({ id: item.id, name: item.name, email: item.email, password: item.password, mobileNo: item.mobileNo })
        setBtn("Update")
    }

   
   

    useEffect(() => {
        getuser()
    }, [])

    function cls() {
        setInputData({ name: '', email: '', password: '', mobileNo: '' })
        setBtn("Save")
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleFormsubmit}>
                            <input className='form-control my-2' type='text' value={inputData.name} name='name' placeholder='enter name' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={inputData.email} name='email' placeholder='enter email' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={inputData.password} name='password' placeholder='enter password' onChange={handleInputFeild} />
                            <input className='form-control my-2' type='text' value={inputData.mobileNo} name='mobileNo' placeholder='enter mobile no' onChange={handleInputFeild} />
                            <input type='submit' value={btn} className='btn btn-primary' />
                        </form>
                    </div>
                    <div className="col-md-6">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    formData.map((item) => {
                                        return (
                                            <>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.mobileNo}</td>
                                                    <td><button onClick={() => { handleEditData(item) }}>Edit</button></td>
                                                    <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button></td>
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

export default USerCrud