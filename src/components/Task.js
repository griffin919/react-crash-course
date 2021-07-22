import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className= {`task ${task.reminder ? 'reminder' : ' '}`} onDoubleClick={()=> onToggle(task.id)}>
            <h3>{task.text} 
            {/* now onDelete function is available to the task component as a prop. So we use a click event to call it because actions gets sent up */}
            <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
            </h3>
            <p>{task.day}  </p>
            
        </div>
    )
}

export default Task
