import React from 'react';

const DropDown = (props) => {
  const handleChange = (e) => {
    props.onOptionChange(e);
    
  };
  return (
    <>
      <select name={props.name} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        onChange={handleChange}>

        <option className="px-4 py-4 text-lg	 bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2" defaultValue=''>Select an Option</option>
        {props.optionList.map((option) => (
          <option key={option.id} className="px-4 py-4 text-lg	 bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 mb-2" value={option.id}>{option.option_name}</option>


        ))}
      </select>
    </>
  )
}

export default DropDown








