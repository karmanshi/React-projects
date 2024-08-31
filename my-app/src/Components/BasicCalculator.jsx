import React from 'react'
import { useState,useEffect } from 'react'
const BasicCalculator = () => {
    const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [output, setOutput] = useState('')

  const handleAdd = () => {
    setOutput(parseInt(number1) + parseInt(number2))
  }

  const handleSubtract = () => {
    setOutput(parseInt(number1) - parseInt(number2))
  }

  const handleMulti = () => {
    setOutput(parseInt(number1) * parseInt(number2))
  }

  const handleDivide = () => {
    setOutput(parseInt(number1) / parseInt(number2))
  }

  const handleMod = () => {
    setOutput(parseInt(number1) % parseInt(number2))
  }

  const handleReset =() =>{
    setNumber1('')
    setNumber2('')
    setOutput('')
  }

  useEffect(() => {
    document.title = "Basic-Calculator";
  }, []); 

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3 text-xl	font-bold'>Calculator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type='text'
        value={number1}
        onChange={(e) => { setNumber1(e.target.value) }}
        className="outline-none w-full py-2 px-3"
        placeholder='Enter the first number'
      />
    </div>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type='text'
        value={number2}
        onChange={(e) => { setNumber2(e.target.value) }}
        className="outline-none w-full py-2 px-3"
        placeholder='Enter the second number'
      />
    </div>
    <div className=" shadow rounded-lg overflow-hidden mb-4">

      <button className='m-3 outline-none px-4 py-2 rounded-full text-white bg-blue-700 shadow-lg' onClick={handleAdd}>Add</button>
      <button className='m-3 outline-none px-4 py-2 rounded-full text-white bg-blue-700 shadow-lg' onClick={handleSubtract}>Subtract</button>
      <button className='m-3 outline-none px-4 py-2 rounded-full text-white bg-blue-700 shadow-lg' onClick={handleMulti}>Multiplication</button>
      <button className='m-3 outline-none px-4 py-2 rounded-full text-white bg-blue-700 shadow-lg' onClick={handleDivide}>Divide</button>
      <button className='m-3 outline-none px-4 py-2 rounded-full text-white bg-blue-700 shadow-lg' onClick={handleMod}>Modulus</button>

    </div>

    <div className="m-2 flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type='text'
        value={output}
        className="outline-none w-full py-2 px-3"
        placeholder='output'
      />
    </div>
    <button type="button" class="w-full text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleReset}>Reset</button>

  </div>
  )
}

export default BasicCalculator
