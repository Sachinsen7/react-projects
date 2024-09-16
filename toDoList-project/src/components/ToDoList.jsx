import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat BreakFast", "Take a Shower", "Play Piano"])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() !== "") {
    
            setTasks( t => [...t, newTask])
            setNewTask('')
        }
    }

    function deleteTask(index) {
        const upadtedTasks = tasks.filter((_, i) => i !== index)
        setTasks(upadtedTasks)

    }

    function moveTaskUp(index){ 
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }

    
  return (
    <div className='family-Arial, sans-serif max-w-4xl shadow-xl rounded-2xl m-10 bg-sky-400 p-4 flex flex-col items-center justify-center h-auto'>
        <h1 className='text-5xl mb-10 font-bold '>To Do List</h1>

        <div>
            <input 
                   className='text-base w-1/2 p-3 rounded-md mb-5 shadow-lg border-2 border-black'
                   type="text"
                   placeholder='Enter A task'
                   value={newTask}
                   onChange={handleInputChange}
                   />
            <button onClick={addTask} className='text-lg  bg-green-600 p-2 rounded-lg text-white ml-4 shadow-lg font-bold transition-all 0.5s ease hover:bg-green-800'>Add</button>

            <ol className='p-0'>
                {tasks.map((task, index) => 
                    <li className='text-xl font-bold p-4 bg-white mb-2 border-2 border-black rounded-md flex items-center'
                        key={index}>
                        <span className='flex-1'>{task}</span> 
                        <button 
                            className='text-base bg-red-600 p-2 rounded-lg text-white ml-4 shadow-lg font-bold transition-all 0.5s ease hover:bg-rose-800 '
                            onClick={() => deleteTask(index)}
                            >Delete
                        </button>

                        <button 
                            className=' text-base bg-blue-600 p-2 mt-5 rounded-lg text-white ml-4 shadow-lg font-bold mb-5 border-none transition-all 0.5s ease hover:bg-blue-800'
                            onClick={() => moveTaskUp(index)}
                            >Up☝️
                        </button>

                        <button 
                            className='bg-blue-600 text-base p-2 rounded-lg text-white ml-4 shadow-lg font-bold border-none transition-all 0.5s ease hover:bg-blue-800'
                            onClick={() => moveTaskDown(index)}
                            >Down👇
                        </button>
                    </li>
                )}     
            </ol>    
        </div>
    </div>
  )
}

export default ToDoList