//used rafce snippet to add a new component structure
import { FaTimes } from "react-icons/fa"
//used npm i react-icons to install react icons
//Can check install status check package.json
//FaTimes is the Times icon in Font Awsome, FA is a icon library in react-icon

const Task = ({task, onDelete, onToggle}) => {
  //take in properties: task list, onDelete, onToggle
  return (
    <div className={`task ${task.reminder ? 'reminder' :''}`} onDoubleClick={() => onToggle(task.id)}>
      {/* use className to set the style of the task. If reminder is true, add reminder to className */}
      {/* when clicked, trigger the prop onToggle passed in and send the task triggered back */}
        <h3>
            {task.text} 
            {/* Show the text of the task */}
            <FaTimes 
                //it's the times(close/delete) icon
                style={{color:"red", cursor:"pointer"}} 
                //set color to red and cursor to pointer
                //pointer will show a hand with one finger point at the icon
                onClick={() => onDelete(task.id)} 
                //once click the icon, trigger the props onDelete sent in and return the task id so app.js know which one to delete
            />
        </h3>
        <p>{task.day}</p>
        {/* Show date of the task */}
    </div>
  )
}

export default Task