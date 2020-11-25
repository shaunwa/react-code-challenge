import './App.css';
import Planets from '../Planets';
import Modal from '../Modal/Modal';
import  { useEffect } from'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlanets } from '../../redux/actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  

const planets = useSelector(state=> state.planets)

const planet = useSelector(state=> state.planet)

const RF = useSelector(state=> state.RF)
const showModal = useSelector(state=> state.showModal)
console.log(showModal)
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getPlanets())
},[]);
  return (
    <div className="App">
      <Modal/>
      <Router>
        <Switch>
        <Route exact path="/">
          <h1>Star Wars Planets</h1>
          <Planets data={planets}/>
        </Route>
        <Route exactact path="/planet">
          <h1>planet</h1>
          <Planets data={planet}/>
        </Route>
        <Route exactact path="/residents">
          <h1>Resident</h1>
          <Planets data={RF}/>
        </Route>
        <Route exactact path="/films">
          <h1>Films</h1>
          <Planets data={RF}/>
        </Route>
        

        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
