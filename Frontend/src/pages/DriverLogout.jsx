import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DriverLogout = () => {

    const token  = localStorage.getItem("token");
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}/drivers/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            localStorage.removeItem("token")
            navigate("/driver-login")
        }
    })

  return (
    <div>Driver Logged out.</div>
  )
}

export default DriverLogout