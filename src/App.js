// putting useState in App.js to make it accessible globally
import React, {useState} from 'react';

import Header from './components/Header'
import Tasks from './components/Tasks'
//import Navbar from './components/Navbar';




function App() {

 // const[name_of_state, update_state_func] = useState(initial state)
 const [tasks, setTask] =useState([
  {
      id: 1,
      text: 'Fuck a bitch',
      day: '3ba fa',
      reminder: true,

  },
  {
      id: 2,
      text: 'Become master',
      day: 'ASAP',
      reminder: true,
  },
  {
      id: 3,
      text: 'Dominate',
      day: 'Anyday now',
      reminder: false,
  },
  

])

//Delete Task function that takes in a id
const deleteTask=(id)=>{
  setTask(tasks.filter((task)=>task.id !== id))
}

//reminder toggle
const toggleReminder = (id) => {
  //console.log(id);
  setTask(
    tasks.map((task)=> task.id === id? {...task, reminder: !task.reminder} : task)
    // used the spread func (...) to bring in all the object array element and change one\
    //map func is being used to loop through the task array btw
    // only paramenter var is accepted in map

    // how the map func works in the expression above
    // 1. the map func is called on the tasks array. amp takes in a callback func
    // 2. the current array item being iterated over is named (task) which is also the parameter
    //of the map func
    // 3. the map func only returns a new array of elements that passes its test.
    // 4. For the body of the test, a ternary operator is used to check if the id of 
    //item being iterated over is equal to the id of the clicked element.
    // 5. if true, we take that array item, spread its items and a reasign the reminder item to false
      
  )
}

  return (
    <div className="container">
      <Header title='Task Tracker'/>

      {/* passing the deleteTask func down to tasks as a prop (omDelete) where the task item actually exists*/}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No task to show'}
    </div>
  );
}

export default App;





























// ----------------------------------------------------------------
// return (
//   // remember jxs expression can only have one single component
//   // everything/all component must be put in the class="app" div 
//   //the parent element can be something aside a div eg <>
//   <div className="container">


//   {/* props */}
//     <Header name="Paul"/>
//     <Navbar />

//     <h1>I am gonna slay react, {name}</h1>
    
//     {/* you can write js directly in here just enclose it in curly braces */}
//     <h1>{(undefined == null)?'true':'false'}</h1>
//   </div>
// );