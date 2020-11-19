import React, { useState, useEffect } from 'react';
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CreatePlanet from '../CreatePlanet'
import './Planets.css';

import Grid from '../Grid';

const Planets = (props) => {
  const [resData, setData] = useState([]);

  useEffect(() => {
    let response = props.getPlanets();
    setData(response);
  }, [resData]);

  const data = {
    header: [{
      name: 'name',
      type: 'string'
    },
    {
      name: 'rotation_period',
      type: 'number'
    },
    {
      name: 'orbital_period',
      type: 'number'
    },
    {
      name: 'diameter',
      type: 'number'
    },
    {
      name: 'climate',
      type: 'string'
    },
    {
      name: 'gravity',
      type: 'string'
    },
    {
      name: 'terrain',
      type: 'string'
    },
    {
      name: 'surface_water',
      type: 'number'
    },
    {
      name: 'population',
      type: 'number'
    },
    {
      name: 'residents',
      type: 'number'
    },
    {
      name: 'films',
      type: 'number'
    }],
    values: props.values,
    actions: [
      {
        label: 'Go to Films',
        route: '/films',
      },
      {
        label: 'Go to Residents',
        route: '/residents',
      }
      ,
      {
        label: 'Go to Planet',
        route: '',
      }
    ]
  }

  return (
    <div className='App'>
      <CreatePlanet />
      <Grid data={data} />
    </div>
  );
}

Planets.prototype = {
  values: PropTypes.array
}

Planets.defaultProps = {
  values: []
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    values: state.planets.list && state.planets.list.results,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Planets);
