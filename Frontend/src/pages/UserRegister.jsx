import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserDataContext } from "../contexts/userContext";

const UserRegister = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()

  const [user, setUser] = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    
    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('') 
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png"
          alt=""
        />
        <form action="" onSubmit={(e) => {
          submitHandler(e)
        }}>

        <h3 className="text-lg font-medium mb-2">Whats you name</h3>
          <div className="flex gap-2 mb-5">
            <input
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            required
            placeholder="First name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />

          <input
            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            required
            placeholder="last name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
          </div>

          <h3 className="text-lg font-medium mb-2">Whats you email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <button onClick={submitHandler} className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Register
          </button>

        </form>
          <p className="text-center mb-4">Already have an Account? <Link to="/login" className="text-blue-600">Login Here</Link></p>
      </div>
      
      <div>
        <p className="text-[10px] leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserRegister