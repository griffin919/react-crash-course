import PropTypes from 'prop-types'

// destructured props
// onClick prop is a function declared in the Header component 
const Button = ({color, text, onClick}) => {
    return (
        <div>

            {/* so with props you declare them in their parent component and
             set them in the component they will be used in*/}
             <button 
                onClick={onClick} 
                style={{backgroundColor: color}} 
                className='btn'>{text}
                </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}



export default Button


