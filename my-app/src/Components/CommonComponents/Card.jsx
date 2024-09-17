import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div
        className="grid grid-cols-4  items-center text-white border border-gray-200 rounded-lg  h-56 px-3  py-2 " style={{ boxShadow: "rgba(80, 78, 78, 0.5) 0px 0px 10px 10px" }}
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
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{props.name}</button>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
