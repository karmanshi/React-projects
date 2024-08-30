import React from 'react'
import { useState } from 'react'

const CaseConertor = () => {
    const [input, setInput] = useState("")

  const handleUpperCase = () => {
    setInput(input.toUpperCase())
  }

  const handleLowerCase = () => {
    setInput(input.toLowerCase())
  }

  const handleSentenceCase = () => {
    function sentenceCase(input) {
      const words = input.toLowerCase().split('.')
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].trim(); 
        if (words[i]) { 
          words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
      }
      return words.join(". ")
    }
    let res = sentenceCase(input)
    setInput(res)
  }

  const handleCapitalCase = () => { 
    function camelCase(input) {
      let words = input.split(" ")
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].trim(); 
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
      }
      return words.join(' ')
    }
    let res = camelCase(input)
    setInput(res)
  }

  const handleReset = () =>{
    setInput('')
  }
  return (
    <div>
      <form className='m-5 p-5'>
        <div className="w-full  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
              <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 font-semibold text-lg">
                String Analysis
              </div>

            </div>

          </div>
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea

              id="editor"
              rows={8}
              className="block w-full p-2 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a Text..."
              value={input}
              onChange={((e) => { setInput(e.target.value) })}

            />
          </div>
        </div>
        <button
          type="button"
          className="m-3 outline-none px-4 py-2 rounded-lg  text-whitetext-sm font-medium text-white bg-yellow-700 rounded-lg focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-900 hover:bg-yellow-900  shadow-lg m-2 inline-flex items-center px-5 py-2.5 "onClick={handleReset}
        >
          Reset
        </button>
      </form>
     
      <div className=" shadow rounded-lg overflow-hidden m-8">

        <button className='w-80 m-3 outline-none px-4 py-2 rounded-lg  text-white bg-blue-700 shadow-lg' onClick={handleSentenceCase}  >Sentence case</button>
        <button className='w-80 m-3 outline-none px-4 py-2 rounded-lg  text-white bg-blue-700 shadow-lg' onClick={handleLowerCase} >lower case</button>
        <button className='w-80 m-3 outline-none px-4 py-2 rounded-lg  text-white bg-blue-700 shadow-lg' onClick={handleUpperCase}>UPPER CASE</button>
        <button className='w-80 m-3 outline-none px-4 py-2 rounded-lg  text-white bg-blue-700 shadow-lg' onClick={handleCapitalCase}>Capitalize Case</button>


      </div>
    </div>
  )
}

export default CaseConertor
