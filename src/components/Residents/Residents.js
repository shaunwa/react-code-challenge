import React, { useState, useEffect } from 'react';
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const Residents = (props) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const { match: { params: { id } } } = props;
    let response = props.getPlanet(id);
    setResidents(response);
  }, [residents]);
  return (
    <div>
       {props.values.map(url => (
        <div>
          <a href={url}>{url}</a>
        </div>
      ))}
    </div>
  );
}

Residents.prototype = {
  values: PropTypes.array
}

Residents.defaultProps = {
  values: []
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    values: state.planets.data && state.planets.data.residents,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Residents);
