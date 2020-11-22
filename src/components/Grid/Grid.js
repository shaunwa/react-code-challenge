import React from "react";

import "./Grid.css";

const Grid = ({ data: { header = [], values = [], actions = [] }, type }) => {

  return (
    <table className="gridTable">
      <thead>
        <tr>
          {header.map((colName, i) => (
            <th key={i}>{colName}</th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, i) => (
          <tr key={i}>
            {header.map((colName, i) => (
              <td key={i}>
                {type === "single" ? <a target="_blank" href={row}>{row}</a> : row[colName]}
              </td>
            ))}
            {!!actions.length && (
              <td className="gridActions">
                {actions.map(({ label, action }) => (
                  <button key={label} onClick={() => action(row)}>
                    {label}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
