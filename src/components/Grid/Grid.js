import './Grid.css';
import { useHistory } from 'react-router-dom';
import { ModalActions } from '../store/ModalSlice';
import { useDispatch } from 'react-redux';

function Grid({ header = [], actions = [], results, data=[] }) {
  console.log(data)
	const history = useHistory();
	
	const dispatch = useDispatch();
	const modalOpenHandler = () => {
			dispatch(ModalActions.Toggle());

	}

	
	return (
		<table className="gridTable">
			<thead>
				<tr>
					{header.map((colName) => (
						<th key={colName}>{colName}</th>
					))}
					{!!actions.length && <th>Actions</th>}
				</tr>
			</thead>
			<tbody>
				{data?.map((row, index) => (
					<tr key={index}>
						{header.map((colName) => (
							<td key={colName}>
								{colName === 'residents' || colName === 'films' ? row[colName].length : row[colName]}
							</td>
						))}
						{!!actions.length > 0 && (
							<td className="gridActions">
								{actions.map(({ label, action }) => (
									<div>
										{label === 'Go to Films' && row.films.length !== 0 ? (
											<button onClick={() => history.push(`/${row.name}/films`)}>
												{label}
											</button>
										) : (
											''
										)}
										{label === 'Go to Residents' && row.residents.length !== 0 ? (
											<button onClick={() => history.push(`/${row.name}/residents`)}>
												{label}
											</button>
										) : (
											''
										)}
										{label === 'Planet Details Page' && (
											<button onClick={() => history.push(`planets/${row.name}`)}>{label}</button>
										)}
										{label === 'Go Back' && (
											<button onClick={() => history.push('/')}>{label}</button>
										)}

										{label === 'Open Modal' && (
											<button onClick={() => modalOpenHandler()}>{label}</button>
										)}
									</div>
								))}
							</td>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Grid;

//{data: {header = [], values = [], actions = []}}