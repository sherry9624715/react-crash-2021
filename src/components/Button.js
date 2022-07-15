import PropTypes from "prop-types"

const Button = ({color, text, onClick}) => {
  //take in states (things you want to be dynamite and can be setted when you use the component)
  return (
    <button 
        onClick={onClick}
        //onclick variable will be passed into onClick in html from the declaration of new Button component
        className='btn' 
        //default className is btn for CSS use
        style={{ backgroundColor:color }}
        //pass in the color variable stated in new component
    >
        {text}
        {/* pass in the text variable stated in new component */}
    </button>
  )
}

Button.defaultProps = {
  //set default props for button for the case that some property are not declared
    color:"black",
    text:"eat me"
}

Button.propTypes = {
  //also can designate what type should be used for the property
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button