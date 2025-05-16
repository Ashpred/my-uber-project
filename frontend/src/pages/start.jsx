import React from 'react'
import { Link } from 'react-router-dom'
const start = () => {
  return (
    <div>
        <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1563282058-c9163e4ab24c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full items-start'>
        <img className="w-16 ml-8" src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="Image" />
            <div className='bg-white px-4 py-4 pb-7 w-full '>
                
                <h2 className='text-3xl font-bold'>
                    Get Started With Uber.
                </h2>
                <Link to="/login" className='flex items-center justify-center bg-black w-full text-white py-3 rounded-lg mt-5'>
                    Continue
                </Link>
            </div>
        </div>
    </div>
  )
}

export default start