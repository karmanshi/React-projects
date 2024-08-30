import React from 'react'
import { data } from './ComponentList'
import Card from './CommonComponents/Card'
const Home = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 '>
        <div className='m-5 w-full  flex justify-center items-center text-center'>
          <h1 className='text-3xl	font-extrabold	text-white drop-shadow-xl'>Projects</h1>
        </div>
        <div className='m-5 w-full  flex justify-center items-center text-center flex-wrap gap-5 p-5'> 
          
         {data.map((element)=>{ return <Card name={element.name} description={element.description} image={element.img} Url={element.url}/>})}
          

          

        </div>
      </div>
    </>
  )
}

export default Home
