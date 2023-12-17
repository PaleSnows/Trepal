import React from 'react'
import pashupati from '../assets/n7.jpg'
import chandragiri from '../assets/n8.jpg'
import lumbini from '../assets/n9.webp'
import phewalake  from '../assets/n10.jpg'
import nuwakot from '../assets/n11.jpg'
import nagarkot from '../assets/n12.jpg'
import SelectCard from './SelectCard'


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3'>
        <SelectCard pic={pashupati} text="Pashupati"/>
        <SelectCard pic={chandragiri} text="Chandragiri"/>
        <SelectCard pic={lumbini} text="Lumbini"/>
        <SelectCard pic={phewalake} text="Phewa Lake"/>
        <SelectCard pic={nuwakot} text="Nuwakot"/>
        <SelectCard pic={nagarkot} text="Nagarkot"/>
    </div>
  )
}

export default Selects