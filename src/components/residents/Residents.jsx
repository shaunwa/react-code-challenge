import React from 'react';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import Grid from '../Grid';
import { selectResidents } from '../../redux/slices/residentsSlice';

function Residents() {
  const residents = useSelector(selectResidents);
  const history = useHistory();

  const data = {
    title: 'Residents',
    header: [
      'name',
      'height',
      'mass',
      'hair_color',
      'skin_color',
      'eye_color',
      'birth_year',
      'gender',
      'films',
      'species',
      'vehicles',
      'starships',
    ],
    values: residents,
    actions: [
      {
        label: 'Go Back',
        action: () => {
          history.push('/');
        },
      },
    ],
  };

  return (
    <div className="App">
      <Grid data={data} />
    </div>
  );
}

export default Residents;
