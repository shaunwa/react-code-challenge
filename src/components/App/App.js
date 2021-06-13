import './App.css';
import { Switch, Route } from 'react-router-dom';
import Planet from '../Planet/Planet';
import Residents from '../Residents/Residents';
import Films from '../Films/Films';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';

import Planets from '../Planets';

function App() {

	const show = useSelector((state) => state.modal.showModal);
	
	return (
		<div className="App">
			{show && <Modal />}
			<h1>Star Wars Planets</h1>
			<Switch>
				<Route exact path="/">
					<Planets />
				</Route>
				<Route exact path="/planets/:id">
					<Planet />
				</Route>
				<Route exact path='/:name/residents'>
					<Residents/>
				</Route>
				<Route exact path='/:name/films'>
					<Films/>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
