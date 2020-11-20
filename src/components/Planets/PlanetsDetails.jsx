import React from 'react';
import { useHistory } from 'react-router-dom';

const PlanetsDetails = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>Planet Description</h1>
      <button type="button" onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PlanetsDetails;
