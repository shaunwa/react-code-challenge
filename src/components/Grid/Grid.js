
import { Link, useHistory } from 'react-router-dom';

import './Grid.css';

function Grid({data: {header = [], values = [], actions = []}}) {
  let history = useHistory();
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
            {header.map((colName) => <td key={colName}>{Array.isArray(row[colName])? row[colName].length : row[colName] }</td>)}
            {!!actions.length && 
              <td className='gridActions'>
                {actions.filter(el=> (el.label!='Go to Residents' || row.residents.length>0))
                        .filter(el=> (el.label!='Go to Films' || row.films.length>0))
                        .map(({label, action,toLink}) => <button type="button" onClick={() => {action(row);history.push(toLink)}}>{label}</button>)}
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;