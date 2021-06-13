import ApiSlice from '../store/ApiSlice';
import { useEffect, useState } from 'react';
import { fetchApiData } from '../store/ApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import General from '../General/General';
import { useHistory, useParams, Link } from 'react-router-dom';
import './Films.css';

function Films() {
	
	const data = useSelector((state) => state.api.data);
	const history = useHistory();
	const { name } = useParams();



	const results = data.results.filter((planet) => planet.name === name);


	const actions = [
		{
			label: 'Go Back',
			action: (row) => {
				console.log(`redirect to grid with ${row.films.length} Films`);
			},
		},
	];

	return (
		<div className="App">
			<table className="gridtable">
				<tbody>
					{results[0].films?.map((row, index) => (
						<tr key={index}>
							{<Link>{row}</Link>}
							{!!actions.length > 0 && (
								<td className="gridActions">
									{actions.map(({ label, action }) => (
										<div>
											
											{label === 'Go Back' && (
												<button onClick={() => history.push('/')}>{label}</button>
											)}
										</div>
									))}
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Films;
