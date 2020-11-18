import React, { useState, useEffect } from 'react';
import { ActionCreators } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const Film = (props) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const { match: { params: { id } } } = props;
    let response = props.getPlanet(id);
    setFilms(response);
  }, [films]);

  return (
    <div>
      { props.values.map(url => (
        <div>
          <a href={url}>{url}</a>
        </div>
      ))}
    </div>
  );
}

Film.prototype = {
  values: PropTypes.array
}

Film.defaultProps = {
  values: []
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    values: state.planets.data && state.planets.data.films,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Film);
