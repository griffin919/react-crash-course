
const Navbar = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Your mama, navbar'
}

export default Navbar
