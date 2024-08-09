import { useState, ChangeEvent, useEffect } from 'react'

// Define the Task type
type Task = {
  text: string
  completed: boolean
}

function TodoApp() {
  // Define state with the Task type
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInput, setTaskInput] = useState<string>('')

  const completedTasks = tasks.filter((task) => task.completed === true)

  useEffect(() => {
    console.log('%cTarefa concluida', 'background: green; color: white')
  }, [completedTasks, tasks, taskInput])

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() === '') return
    setTasks([...tasks, { text: taskInput, completed: false }])
    setTaskInput('')
  }

  // Function to toggle task completion
  const toggle = (index: number) => {
    const newTasks = [...tasks]
    newTasks[index].completed = true
    setTasks(newTasks)
  }

  // Function to delete a task
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index + 1))
  }

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={taskInput} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggle(index)}
            />
            {task.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
