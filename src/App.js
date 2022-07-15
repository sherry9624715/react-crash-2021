import Header from "./components/Header";
//import component header

import Tasks from "./components/Tasks";
//import component Tasks, so it can be used in this file.

import AddTask from "./components/AddTask";
//import component AddTask

import { useState, useEffect } from "react";
//import useState, so we can set state and pass it to the components ??

function App() {
  const [showAddForm, setShowAddForm ] = useState(false)
  const [tasks, updateTasks] = useState([])
  //State a new state variety cold tasks, and we will use function updateTasks to update it.
  //use useState to set a initial value of tasks
  //const [count, setCount] = useState(0);
    

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      updateTasks(tasksFromServer)
    }
    getTasks()
  },[])

  //fetch Tasks
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:4000/tasks')
    const data = await res.json()
    
    // console.log(data)
    return data
  } 


  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await res.json()
    
    // console.log(data)
    return data
  } 


  //addTask to state
  const addTask = async(task)=>{
    const res = await fetch('http://localhost:4000/tasks',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      } ,
      body: JSON.stringify(task),
    })
    

    const data = await res.json()
    updateTasks([...tasks, data])
    //assign ID is not needed with JSON-server
      // const id = Math.floor(Math.random() * 100000)+1
      // const newTask = {id, ...task}
      // updateTasks([...tasks,newTask])
  }

  //delete task
  const deleteTask = async(id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'DELETE',
    })    
    
    updateTasks(tasks.filter((task) => task.id !== id))

    //use updaTasks set in hook to delete specific task with id
    // Create a new list of task in tasks wich is not using the id we want
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:4000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    updateTasks(
      tasks.map((task)=>
        task.id === id ? {...task, reminder: data.reminder} : task
        //map through all the task in tasks, if the task id equals to the id passed in, 
      )
    )
  }

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm)
  }
  
  return (
    <div className="container">
      <Header toggleAddForm={toggleAddForm} showAdd={showAddForm}/>
      {showAddForm && <AddTask onAdd={addTask}/>}
      {/* send addTask into component */}

      {/* tasks won't always be there, so set a condition for task */}
      {tasks.length > 0 ? (
        // if there are tasks
        <Tasks 
          tasks={tasks} 
          //pass state taks to tasks component
          onDelete={deleteTask}
          //pass ondelete action into task inside tasks
          onToggle={toggleReminder}
          //pas onToggle action into task inside tasks
        />
      ):(
       // if there are no tasks
        "Tasks cleared!"
      )}
    </div>
  );
}

export default App;
