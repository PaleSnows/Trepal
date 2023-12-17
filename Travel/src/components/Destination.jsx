import React from 'react'
import pokhara from '../assets/n2.webp'
import mustang from '../assets/n3.jpg'
import everest from '../assets/n4.jpg'
import chitwan from '../assets/n5.jpg'
import gosaikundo from '../assets/n6.jpg'


const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>Best Destinations</h1>
            <p className='py-3'>That are recommended</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={pokhara} alt='/'/>
                <img className='w-full h-full object-cover' src={mustang} alt='/'/>
                <img className='w-full h-full object-cover' src={everest} alt='/'/>
                <img className='w-full h-full object-cover' src={chitwan} alt='/'/>
                <img  className='w-full h-full object-cover'src={gosaikundo} alt='/'/>
            </div>
    </div>
  )
}

export default Destination