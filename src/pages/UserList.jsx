import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [usersData, setUsersData] = React.useState([]);
    const [message, setMessage]= useState("");
    useEffect(()=>{
        getUserData();
    }, [])
    const getUserData = async()=>{
        const  response = await fetch('http://localhost/loginProject/api/user.php');
        const data = await  response.json();
        console.log(data);
        setUsersData(data);
    }
    const handleDelete=async(id)=>
    {
        const deleteUser = await axios.delete(`http://localhost/loginProject/api/user.php/${id}`);
        setMessage(deleteUser.data.success);
        getUserData();
    }
    return (
        <div>
            <h1 className='text-center mb-8'>User List Table</h1>
            <p className='text-error text-center my-4'>{message}</p>
            <table className='mx-auto text-center shadow-lg bg-base-200 p-10 rounded'>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((uData, idx)=>(  
                            <tr key={idx} className=''>
                                <td className='px-4'>{idx + 1}</td>
                                <td className='px-4'>{uData.username}</td>
                                <td className='px-4'>{uData.email}</td>
                                <td className='px-4'>{uData.status === 1 ? 'Active' : 'Inactive'}</td>
                                <td className='space-x-4 px-4'>
                                    <Link to={'/editData/'+ uData.id} className='btn btn-primary'>Edit</Link>
                                    <button onClick={()=>handleDelete(uData.id)} className='btn btn-error'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserList;