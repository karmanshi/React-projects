import React from 'react'
import { Link } from 'react-router-dom'
import { data } from './ComponentList'
const Home = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-5 '>
        <div className='m-5 w-full  flex justify-center items-center text-center'>
          <h1 className='text-3xl	font-extrabold	text-white drop-shadow-xl'>Projects</h1>
        </div>
        <div className='m-5 w-full  flex justify-center items-center text-center flex-wrap gap-5 p-5'> 
          
         {data.map((element)=>{ return <div
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow shadow-slate-100		md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={element.img || 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/189.png'} 
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-80 text-justify p-2 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {element.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-balance">
                {element.description}
              </p>
              <Link to={element.url}>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{element.name}</button>
              
              </Link>
            </div>
          </div>})}
          

          

        </div>
      </div>
    </>
  )
}

export default Home
