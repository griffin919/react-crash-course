import Button from './Button'
// prop-types: built in type system for properties


// PROPS: a way to pass data between components

// rafce brings in a builer plate of function base component

//import React from 'react' //this was required but not needed anymore

// you can destructure props so you can: 
// const Header = ({title}) intead of const Header = (props) 

const Header = ({title}) => {
    const onClick = (e) => {
        console.log("clicked", e)
    }

    return (
        <header className='header'>
            <h1>{title}</h1>

            {/* 
                you can import components into other components.
                In theis case i imported the Button component into the header component
            */}

            <Button color = 'green'  text='Add' onClick={onClick}/>
           
        </header>
    )
}










// <header>

// {/* so because you've destructured props the title 
// //property is available to be used outside the prop object */}

// {/* inline CSS in JS*/}
// <h1 style={{color: 'red', fontSize: '20px'}}>im the header {name}</h1>
// <h2 style={varCSS}>Just texting css stored a variable</h2>
// </header>





export default Header



