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
        action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`)}
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`)}
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
    values: state.planets.data && state.planets.data.results,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Planets);
