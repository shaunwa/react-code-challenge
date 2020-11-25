import './Planets.css';
import Grid from '../Grid';
import PropTypes from 'prop-types'
function Planets(props) {

  
  

  return (
    <div className='App'>
      {props.data ? 
      <Grid data={props.data} /> : <></> }
    </div>
  )
  }

  Planets.propTypes = {
    data : PropTypes.object.isRequired,
  }
export default Planets;



 
  
 
  
  