import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const userLogin = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [userData, setuserData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        setuserData({
            email: email,
            password: password
        })
        setemail('')
        setpassword('')
    }

    return (
    <div className='p-7 h-screen w-screen flex flex-col justify-between'>
        <div>
        <img className="w-16 mb-6" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Image" />
       <form onSubmit={(e)=>handleSubmit(e)} >
        <h3 className='text-lg font-medium mb-2 mt-10'>What's your email?</h3>
        <input value={email}

        onChange={(e) => setemail(e.target.value)}

        className="bg-[#eeeeee] mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" required type="email" placeholder='email@example.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input value={password}

        onChange={(e) => setpassword(e.target.value)}

        className="bg-[#eeeeee] mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" required type="password" placeholder='Password' />
        <button className='bg-[#111] text-white mt-2 font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
       
       <p className='text-centre flex flex-row justify-center items-center'>New to Uber? <Link to='/signup' className='ml-1 text-blue-600' >Create an account</Link></p>
       
       </form>
        </div>
        <div>
            <Link to='/captain-login' className='bg-[#111] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as a Captain
            </Link>
        </div>
    </div>
  )
}

export default userLogin