import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
        {tasks.map((task) =>(
           <Task 
                key={task.id} 
                //need a key to distinguish different task component
                task={task} 
                //pass in a object into task
                onDelete={onDelete} 
                //pass down onDelete
                onToggle={onToggle}
                //pass down onToggle
            />
        ))}
    </>
  )
}

export default Tasks