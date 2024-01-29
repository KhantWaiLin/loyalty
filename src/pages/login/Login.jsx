import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    password: "",
    userType: 2,
  });
  const api_url =
    process.env.REACT_APP_API_URL + "/api/Authentication/Authenticate";
  console.log(api_url);
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
  };
  console.log(form);

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(api_url, form).then((response) => {
      if (response?.data?.code === 200) {
        const strigify_data = JSON.stringify(response?.data?.data);
        localStorage.setItem("authenticate_data", strigify_data);
        navigate("/home");
      } else {
        console.log("Login Failed.");
      }
    });
  };
  return (
    <div className="flex flex-col h-full items-center  w-full">
      <div className="w-[80%] flex flex-col items-center justify-center mt-[200px]">
        <h1 className="mb-5 text-[28px] flex justify-center">Loyalty</h1>
        <form onSubmit={onSubmit} className="bg-gray-300 p-4 rounded-lg">
          <div className="flex flex-col mb-2">
            <label className="mb-1">User Name</label>
            <input
              name="userName"
              value={form.userName}
              type="text"
              className="p-1 rounded-sm"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1">Password</label>
            <input
              name="password"
              value={form.password}
              type="password"
              className="p-1 rounded-sm"
              onChange={onChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-2 py-1 bg-blue-400 rounded-md text-white"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
