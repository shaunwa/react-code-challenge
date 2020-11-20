import React, { useState, useEffect } from 'react';
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './Planet.css';

const Planet = (props) => {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    const { match: { params: { id } } } = props;
    let response = props.getPlanet(id);
    setPlanet(response);
  }, [planet]);
  return (
    <div>
      <h2 className="textCenter">{props.planet.name}</h2>
      <table className='gridTable'>
        <thead>
          <tr>
            {Object.keys(props.planet).map(colName => {
              if (colName === 'films' || colName === 'residents') {
                return ""
              }
              return <th key={colName}>{colName}</th>
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(props.planet).map(colName => {
              if (typeof colName === 'object') {
                return ""
              }
              return <td key={colName}>{colName}</td>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Planet.prototype = {
  planet: PropTypes.object
}

Planet.defaultProps = {
  planet: {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    planet: state.planets.data,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Planet);
