import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import Grid from '../Grid';
import { selectFilms } from '../../redux/slices/filmsSlice';

function Films() {
  const films = useSelector(selectFilms);
  const history = useHistory();

  const data = {
    title: 'Films',
    header: [
      'title',
      'episode_id',
      'opening_crawl',
      'director',
      'producer',
      'release_date',
      'characters',
      'planets',
      'starships',
      'vehicles',
      'species',
    ],
    values: films,
    actions: [
      {
        label: 'Go Back',
        action: () => {
          history.push('/');
        },
      },
    ],
  };

  useEffect(() => {
    data.values = films;
  }, [films]);

  return (
    <div className="App">
      <Grid data={data} />
    </div>
  );
}

export default Films;
