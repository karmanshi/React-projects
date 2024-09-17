import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div
        className="grid grid-cols-4  items-center text-white  shadow-lg shadow-gray-700/50 rounded-lg  h-56 px-3  py-2 " 
      >
        <div className='col-span-1 bg-white' >
          
          <img
            className="w-40 rounded-t-lg   "
            src={props.image || 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/189.png'}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between leading-normal text-justify p-2 col-span-3 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
            {props.name}
          </h5>
          <p className="mb-3 font-normal text-white  text-balance">
            {props.description}
          </p>
          <Link to={props.Url}>
            <button type="button" className="mt-1 flex items-center justify-center text-base rounded-full border-2 bg-transparent hover:bg-white text-white font-semibold py-2 px-4 border border-white hover:text-black">Visit Site</button>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
