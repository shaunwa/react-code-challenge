import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Planets.css';

import { useHistory } from 'react-router-dom';
import Grid from '../Grid';
import {
  getPlanets,
  selectFormVisibility, selectNextPage, selectPlanets, selectPrevPage, setFormVisibility,
} from '../../redux/slices/planetsSlice';
import { getResidents } from '../../redux/slices/residentsSlice';
import { getFilms } from '../../redux/slices/filmsSlice';
import AddPlanetAction from '../Grid/Actions/AddPlanetAction';

function Planets() {
  const planets = useSelector(selectPlanets);
  const prevPage = useSelector(selectPrevPage);
  const nextPage = useSelector(selectNextPage);
  const isFormVisible = useSelector(selectFormVisibility);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddFormVisible = () => {
    dispatch(setFormVisibility(true));
  };

  const handleNextPage = ({ target }) => {
    if (target.value === 'next') {
      dispatch(getPlanets(nextPage));
      return;
    }
    dispatch(getPlanets(prevPage));
  };

  const data = {
    title: 'Planets',
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
    ],
    values: planets,
    actions: [
      {
        label: 'Go to Films',
        columnName: 'films',
        action: (row) => {
          if (row.films.length > 0) {
            dispatch(getFilms(row.films));
            history.push('/films');
          }
        },
      },
      {
        label: 'Go to Residents',
        columnName: 'residents',
        action: (row) => {
          if (row.residents.length > 0) {
            dispatch(getResidents(row.residents));
            history.push('/residents');
          }
        },
      },
      {
        label: 'Planet Details',
        action: () => {
          history.push('/planetDetails');
        },
      },
    ],
  };

  return (
    <div className="App">
      <Grid data={data} isCustom />
      <div className="planets__button-group">
        <div>
          <button type="button" disabled={prevPage === null} value="prev" onClick={handleNextPage}>Previous page</button>
          <button type="button" disabled={nextPage === null} onClick={handleNextPage} value="next">Next Page</button>
        </div>
        <button type="button" onClick={handleAddFormVisible}>Add Planet</button>
      </div>
      <AddPlanetAction isVisible={isFormVisible} />
    </div>
  );
}

export default Planets;
