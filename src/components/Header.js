import PropTypes from "prop-types"
//import proptypes so we can declare proptypes later
import Button from "./Button"
//import component Button cuz it's used in this component.

const Header = ({title, toggleAddForm, showAdd}) => {
    //declare the name of the component and the property it's going to take in

  return (
    //return header render detail when the component is called in app.js
    <header className='header'>
        {/* declare className so it can catch the css in index.css  */}
        <h1>{title}</h1>
        {/* take in title variable */}
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={toggleAddForm}/>
        {/* set color, text and onClick function for the Button in Header */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
    //Same, set default props for the props in Header
}

Header.propTypes = {
    title: PropTypes.string,
    //Same, set default propTypes for the props in Header
}
export default Header
//export the component