// state is an object that is privately maintained inside a component
// influnces what is rendered in the a browser
// state can be changed within the component
//for state to be available to for all componenst to draw from

import Task from "./Task"

//onDelete is brought to Tasks as a prop now it will be passed down to task
const Tasks = ({tasks, onDelete, onToggle}) => {
   
   

    return (
        <>
            {/* how to loop through the tasks by creating a list using the map function */}
            {/* key prop removes console err */}
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
