import axios from "axios";
import { fromJSON } from "postcss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        username: "",
        email: "",
        status: "",
    });
    const [message, setMessage] = useState('');
    const handleInputData = (e) => {
      setFormValue({...formValue,  [e.target.name]: e.target.value});
    };
    const handleSubmit = async(e) =>{
      e.preventDefault();
      // console.log(formValue);
      const formData = {username: formValue.username,  email: formValue.email, status: formValue.status};
      const res = await axios.post("http://localhost/loginProject/api/user.php", formData);
      if(res.data.success){
        setMessage(res.data.success);
        setTimeout(() => {
          navigate("/userList");
      },  2000);

    }
  }
    return (
        <div>
            <h1 className="text-center mb-4 text-lg font-bold">Add user</h1>
            <p className="text-center my-6">{message}</p>
            <div className="w-full max-w-xs mx-auto shadow-2xl">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            onChange={handleInputData} value={formValue.username}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={handleInputData} value={formValue.email}
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            type="email"
                            name="email"
                            placeholder="user@gmail.com"
                        />
                    </div>
                    <div className="mb-6 flex items-center space-x-28">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                            Status
                        </label>
                        <select onChange={handleInputData} value={formValue.status} required name="status" id="">
                            <option value="">---Select---</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"></label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline btn btn-success"
                            name="submit"
                            type="submit"
                        />
                    </div>
                    {/* <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#">
                            Forgot Password?
                        </a>
                    </div> */}
                </form>
                <p className="text-center text-gray-500 text-xs pb-2">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default AddUser;
