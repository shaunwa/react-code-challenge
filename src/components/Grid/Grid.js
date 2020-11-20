import { Link } from "react-router-dom";
import './Grid.css';

function Grid({ data: { header = [], values = [], actions = [] } }) {

  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(column => <th key={column.name}>{column.name}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((column) => {
              return <td key={column.name} style={column.type === 'number' ? { textAlign: 'right' } : {}}>
                {(column.name === 'films' || column.name === 'residents') ? row[column.name].length : row[column.name] }
              </td>
            })}
            {!!actions.length &&
              <td className='gridActions'>
                {actions.map(({ label, route }) => {
                  return (route === '/films' && row.films.length > 0) || (route === '/residents' && row.residents.length > 0) ?
                  <Link to={`planets/${row.url.split('/')[5]}${route}`}><button>{label}</button></Link> : ''
                })}
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
