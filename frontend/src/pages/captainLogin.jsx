import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const captainLogin = () => {
    const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        const [captainData, setcaptainData] = useState({})
    
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
    <div>
        <div className='p-7' h-screen  flex flex-col justify-between>
                <div>
                <img className="w-20 mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="Image" />
               <form onSubmit={(e)=>handleSubmit(e)} >
                <h3 className='text-lg font-medium mb-2 mt-4'>What's your email?</h3>
                <input value={email}
        
                onChange={(e) => setemail(e.target.value)}
        
                className="bg-[#eeeeee] mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" required type="email" placeholder='email@example.com' />
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input value={password}
        
                onChange={(e) => setpassword(e.target.value)}
        
                className="bg-[#eeeeee] mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" required type="password" placeholder='Password' />
                <button className='bg-[#111] text-white mt-2 font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
               
               <p className='text-centre flex flex-row justify-center items-center'>Join Us? <Link to='/captain-signup' className='ml-1 text-blue-600' >Register as a Captain</Link></p>
               
               </form>
                </div>
                <div>
                    <Link to='/login' className='bg-[#111] flex items-center justify-center text-white mt-21 font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                        Sign in as a User
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default captainLogin