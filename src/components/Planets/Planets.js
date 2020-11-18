import React, { useState, useEffect } from 'react';
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Planets.css';

import Grid from '../Grid';

const Planets = (props) => {
  const [resData, setData] = useState([]);

  useEffect(() => {
    let response = props.getPlanets();
    setData(response);
  }, [resData]);

  const data = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
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
    ]
  }

  return (
    <div className='App'>
      <Grid data={data} />
    </div>
  );
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
