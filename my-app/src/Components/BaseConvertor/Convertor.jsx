import React from 'react'
import option from './Option'
import DropDown from './DropDown'
import { useState } from 'react'
import { Decimal_Binary, Decimal_Octal, Binary_Decimal,Octal_Decimal,Decimal_Hexa,Hexa_Decimal} from './Logic'


const Convertor = () => {
    const [frombase, setFromBase] = useState('')
    const [tobase, setToBase] = useState('')
    const [baseInput, setBaseInput] = useState(0)
    const [baseOutput, setBaseOutput] = useState('')
    const [reset, setReset] = useState('')

    const onOptionChangeFrom = (e) => {
        setFromBase(e.target.value)
    }

    const onOptionChangeTo = (e) => {
        setToBase(e.target.value)
    }

    const onInputChange = (e) => {
        setBaseInput(e.target.value)
    }

    const onReset = () => {
        setFromBase('')
        setToBase('')
        setBaseInput('')
        setBaseOutput('')
    }


    const handleClick = () => {
        let response = ''
        if (frombase == 'decimal' && tobase == 'binary') {
            response = Decimal_Binary(baseInput)
        }
        else if(frombase == 'decimal' && tobase == 'hexadecimal' ){
            response = Decimal_Hexa(baseInput) 
        }
        else if (frombase == 'decimal' && tobase == 'octal') {
            response = Decimal_Octal(baseInput)
        }
        else if (frombase == 'binary' && tobase == 'decimal') {
            response = Binary_Decimal(baseInput)
        }
        else if(frombase == 'binary' && tobase == 'octal' ){
            response = Binary_Decimal(baseInput) 
            response = Decimal_Octal(response) 
        }
        else if(frombase == 'binary' && tobase == 'hexadecimal' ){
            response = Binary_Decimal(baseInput) 
            response = Decimal_Hexa(response) 
        }
        else if(frombase == 'octal' && tobase == 'decimal')
        {
            response = Octal_Decimal(baseInput)
        }
        else if(frombase == 'octal' && tobase == 'binary' ){
            response = Octal_Decimal(baseInput) 
            response = Decimal_Binary(response) 
        }
        else if(frombase == 'octal' && tobase == 'hexadecimal' ){
            response = Octal_Decimal(baseInput) 
            response = Decimal_Hexa(response) 
        }
        else if(frombase == 'hexadecimal' && tobase == 'decimal' ){
            response = Hexa_Decimal(baseInput)
        }
        else if(frombase == 'hexadecimal' && tobase == 'binary' ){
            response = Hexa_Decimal(baseInput)
            response = Decimal_Binary(response)
        }
        else if(frombase == 'hexadecimal' && tobase == 'octal' ){
            response = Hexa_Decimal(baseInput)
            response = Decimal_Octal(response)
        }
        else{
            response = baseInput
        }
        setBaseOutput(response)
    };





    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-4 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-white">
                    Numeric Base Convertor
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-4 p-5 rounded bg-gray-100">
                <form action="#" method="POST" className="space-y-6" >

                    <div>
                        <label htmlFor="input" className="block text-sm font-medium leading-6 text-gray-900">
                            From
                        </label>
                        <div className="mt-2">
                            <DropDown name="From" optionList={option} onOptionChange={onOptionChangeFrom} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="input" className="block text-sm font-medium leading-6 text-gray-900">
                            To
                        </label>
                        <div className="mt-2">
                            <DropDown name="To" optionList={option} onOptionChange={onOptionChangeTo} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="input" className="block text-sm font-medium leading-6 text-gray-900">
                            Please Enter the Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="input"
                                name="input"
                                type="text"
                                value={baseInput}
                                onChange={onInputChange}
                                required

                                className=" block w-full rounded-md border-0   py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    
                    <div>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick}>Convertor</button>

                        <button type="button" class="text-white bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onReset}>Reset</button>


                    </div>

                    <div>
                        <label htmlFor="output" className="block text-sm font-medium leading-6 text-gray-900">
                            Output of Convertor
                        </label>
                        <div className="mt-2">
                            <input
                                id="output"
                                name="output"
                                type="text"
                                disabled="true"
                                value={baseOutput}
                                className=" block w-full rounded-md border-0   py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                </form>


            </div>
        </div>
    )
}

export default Convertor