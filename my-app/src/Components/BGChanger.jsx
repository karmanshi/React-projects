import React from 'react'
import { useState,useEffect } from 'react'
const BGChanger = () => {
    const [color,setColor] =useState('olive')
    useEffect(() => {
      document.title = "BG-Changer";
    }, []); 

  return (
    <div className='w-full h-screen 'style={{backgroundColor: color }}>
    <div className='fixed flex  justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl'>
        <input className='border-0 outline-none px-4 py-1 rounded-full text-white bg-red-500 shadow-lg' type="color" id="favcolor" name="favcolor" placeholder='Color Picker' onChange={(e)=>setColor(e.target.value)}/>
          <button
            className='outline-none px-4 py-1 rounded-full text-white bg-red-500 shadow-lg'
            onClick={() => setColor('#e02d3c')}
          >
            Red
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white bg-yellow-900 shadow-lg'
            onClick={() => setColor('#D2691E')}
          >
           Chocolate
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white bg-green-500 shadow-lg'
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white bg-gray-500 shadow-lg'
            onClick={() => setColor('gray')}
          >
            Gray
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white bg-pink-500 shadow-lg'
            onClick={() => setColor('pink')}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  )
}

export default BGChanger
