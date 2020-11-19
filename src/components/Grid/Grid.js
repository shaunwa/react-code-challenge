import { Link } from "react-router-dom";
import './Grid.css';

function Grid({data: {header = [], values = [], actions = []}}) {
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => {
              if(colName=='films' || colName=='residents') {
                return <td key={colName}>{row[colName].length}</td>
              }
              return <td key={colName}>{row[colName]}</td>
            })}
            {!!actions.length &&
              <td className='gridActions'>
                {actions.map(({label, route}) => {
                  if(route === '/films' && row.films.length > 0 || route === '/residents' && row.residents.length > 0) {
                    return <Link to={`planets/${row.url.split('/')[5]}${route}`}><button>{label}</button></Link> 
                  } else {
                    return ""
                  }
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
