import React, {useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DriverDataContext } from '../contexts/DriverContext';
import axios from 'axios';

const DriverProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { driver, setDriver } = useContext(DriverDataContext); 
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        if(!token) {
            navigate("/driver-login")
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/drivers/profile`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status === 200){
            setDriver(response.data.driver);
            setIsLoading(false);
        }
    }).catch(e => {
        console.log(e);
        localStorage.removeItem("token");
        navigate('/driver-login')
    })

    if(isLoading){
        return (
            <div>Loading..</div>
        )
    }

  return (
    <>
        {children}
    </>
  )
}

export default DriverProtectWrapper