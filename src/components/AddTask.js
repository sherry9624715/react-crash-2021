import { useState } from "react"
import PropTypes from "prop-types"

const AddTask = ({onAdd}) => {
    const [text, setTaskName ] = useState("")
    //statte a new state called taskName and use setTaskName to control it
    const [day, setTaskTime ] = useState("")
    //statte a new state called taskTime and use setTaskTime to control it
    const [reminder, setChecked] = useState(false)
    //statte a new state called checked which default is false and use setChecked to control it

    const onSubmit = (e) =>{
        //set a function take in event
        e.preventDefault()
        //?? use the function preventDefault in event

        if (!text){
            //if taskName is empty
            alert('Please enter a task')
            //alert that task name is needed
            return
            //return to where??
        }

        onAdd({text, day, reminder})
        //pass these state up to addTask in App.js

        //clear
        setTaskName('')
        setTaskTime('')
        setChecked(false)
    }

  return (
    //return component
    <>
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="what to do?" 
                    value={text} 
                    onChange={(e)=> setTaskName(e.target.value)} 
                /> 
            </div>
            <div className="form-control">
                 <label>Time</label>
                <input 
                    type="text" 
                    placeholder="when?" 
                    value={day}  
                    onChange={(e)=> setTaskTime(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>   
                <input 
                    type="checkbox" 
                    // checked={reminder}
                    //so when
                    value={reminder}  
                    onChange={(e)=> {
                        setChecked(e.target.value)
                        console.log(e.target.value)
                    }}
                />
            </div>

            <input type="submit" className="btn btn-block" value='Save' />
        </form>
    </>
  )
}


AddTask.propTypes = {
    //also can designate what type should be used for the property
      onAdd: PropTypes.func,
  }

export default AddTask

