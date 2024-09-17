import React, { useState, useEffect } from 'react'
import { ParentContainer } from './Heading'

const Todo = () => {
  const [addData, setAddData] = useState('')
  const [todo, setTodo] = useState([])

  const handleInputChange = (e) => {
    setAddData(e.target.value)

  }

  const addTask = () => {
    setTodo([...todo, addData])
    setAddData('')
  }
  const deleteTask = (e) => {
    const deleteItem = [...todo]
    console.log(deleteItem)
    deleteItem.splice(e.target.key, 1)
    console.log(deleteItem)
    setTodo([...deleteItem])
  }

  const EditTask = (index) => {
    const editItem = [...todo]
    let userInput = prompt("Enter the Task")
    editItem[index] = userInput
    setTodo([...editItem])

  }

  useEffect(() => {
    document.title = "Todo";
  }, []);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6">
      <ParentContainer>
        <div >
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-300">
            Todo List
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <div className="mt-2">
              <input
                id="task"
                name="task"
                type="text"
                value={addData}
                onChange={handleInputChange}
                className=" block w-full rounded-md border-0 h-10 mt-5 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                placeholder='Enter the task'
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="flex w-full justify-center h-10 rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={addTask}
            >
              Add a Task
            </button>
          </div>


        </div>

        <div className="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-1">
                  sr.no.
                </th>
                <th scope="col" className="px-6 py-3">
                  Task
                </th>

                <th scope="col" className="px-6 py-3">
                  Delete
                </th>

                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            {todo.map((task, index) => (<tbody>
              <tr key={index} className="odd:bg-white even:bg-gray-300 border-b  text-black font-semibold" >

                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{task}</td>
                <td className="px-6 py-4">
                  <button
                    type='button'
                    name='delete-button'
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    key={index}
                    onClick={deleteTask}
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    name='update-button'
                    type='button'
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    key={index}
                    onClick={() => { EditTask(index) }}
                  >
                    Edit
                  </button>
                </td>
              </tr>

            </tbody>))}
          </table>
        </div>
      </ParentContainer>

    </div>
  )
}

export default Todo