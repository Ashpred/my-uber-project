import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import axios from 'axios'
import {UserDataContext} from '../context/userContext'

const userSignup = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [userData, setuserData] = useState({})
    const {user, setUser} = useContext(UserDataContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname :{
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if(response.status === 201) {
            const data = await response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }
        setemail('')
        setpassword('')
        setfirstName('')
        setlastName('')
    }
  return (
    <div>
        <div className='p-7 h-screen w-screen flex flex-col justify-between'>
                <div>
                <img className="w-16 mb-6" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Image" />
               <form onSubmit={(e)=>handleSubmit(e)} >
                
                <h3 className='text-lg font-medium mb-2 mt-8'>What's your name?</h3>
                <div className='flex gap-4 mb-5'>
                    <input value={firstName}
                    onChange={(e) => setfirstName(e.target.value)} type="text" className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base" required placeholder='First Name' />
                    <input value={lastName}
                    onChange={(e) => setlastName(e.target.value)} type="text" className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base" placeholder='Last Name' />
                </div>
                <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
                <input
                value={email} onChange={(e) => setemail(e.target.value)}
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-base placeholder:text-sm" required type="email" placeholder='email@example.com' />
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input
                value={password} onChange={(e) => setpassword(e.target.value)}
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base" required type="password" placeholder='Password' />
                <button className='bg-[#111] text-white mt-2 font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign Up</button>
               
               <p className='text-centre flex flex-row justify-center items-center'>Already have an account? <Link to='/login' className='ml-1 text-blue-600' >Login Here</Link></p>
               
               </form>
                </div>

                <div>
                    <p className='text-[10px] leading-tight color-[#eeeeee] '>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
                </div>

            </div>
    </div>
  )
}

export default userSignup