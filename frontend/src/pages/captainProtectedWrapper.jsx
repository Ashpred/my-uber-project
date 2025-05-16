import React, {useContext, useEffect} from 'react'
import { CaptainDataContext } from '../context/captainContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const captainProtectedWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!token) {
            navigate('/captain-login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200) {
            const data = response.data
            setCaptain(data.captain)
            setIsLoading(false)
        }
    }).catch((error) => {
        console.log(error)
        localStorage.removeItem('token')
        navigate('/login')
    })

    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }

  return (
    <>
        {children}
    </>
  )
}

export default captainProtectedWrapper