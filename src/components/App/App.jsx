import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { useDispatch } from 'react-redux';
import Planets from '../Planets';
import { getPlanets } from '../../redux/slices/planetsSlice';
import Residents from '../residents/Residents';
import Films from '../films/Films';
import PlanetsDetails from '../Planets/PlanetsDetails';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanets('https://swapi.dev/api/planets/'));
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Planets} />
        <Route exact path="/residents" component={Residents} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/planetDetails" component={PlanetsDetails} />
      </Switch>
    </Router>
  );
}

export default App;
