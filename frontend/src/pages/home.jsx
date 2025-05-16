import React, { use } from 'react'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'


const home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '75%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.5
      })
    }
    else{
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.5
      })
    }
  },[panelOpen,panelCloseRef])

  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-17 absolute left-5 top-2' src="https://images.seeklogo.com/logo-png/33/2/uber-logo-png_seeklogo-338872.png" alt="uber_logo" />
        <div className='h-screen w-screen'>
          <img className='h-full w-full object-cover'  src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt="map_ig" />
        </div>
        <div className=' flex flex-col justify-end h-screen absolute top-0 w-full  '>
          <div className='h-[25%] p-5 bg-white relative bottom-0 '>
            <h5 ref={panelCloseRef} onClick={() => setpanelOpen(false)} className='absolute opacity-1 right-6 top-6 text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className='font-bold font-sans uber-move text-2xl'>Find a Trip</h4>
            <form onSubmit={(e) => {
              submitHandler(e)
            }}>
              <div className="line absolute h-14 w-1 top-[41%] left-9 bg-gray-900 rounded-full"></div>
              <input 
              onClick={() => setpanelOpen(true)}
              value={pickup} onChange={(e) => setpickup(e.target.value)} className='bg-[#eeeeee] px-10 pt-2 text-lg w-full mt-4 rounded-lg' type="text" placeholder='Add a pick-up location' />
              <br />
              <input
              onClick={() => setpanelOpen(true)}
              value={destination} onChange={(e) => setdestination(e.target.value)} className='bg-[#eeeeee] px-10 pt-2 text-lg w-full mt-3 rounded-lg' type="text" placeholder='Enter your destination' />
            </form>
          </div>
          <div ref={panelRef} className='h-0 bg-white relative -top-1 '>
            <LocationSearchPanel />
          </div>
        </div>
        <div className='fixed z-10 bottom-0 p-5'>
            <div className='flex items-center justify-between '>
              <img className='h-15' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
              <div>
                <h4>UberGo <span> <i className="ri-user-fill"></i></span></h4>
                <h5>2 mins away</h5>
                <p>Affordable Compact Rides.</p>
                <h2>₹193</h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default home