/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { object, bool } from 'prop-types';
import dataSelector from '../../helpers/whichDataSelect';
import Actions from './Actions/Actions';
import './Grid.css';

function Grid({
  data: {
    header = [], values = [], actions = [], title = '',
  },
  isCustom = false,
}) {
  const [customHeader, setCustomHeader] = useState([]);

  useEffect(() => {
    if (isCustom) {
      setCustomHeader([...header, 'residents', 'films']);
    }
  }, []);

  return (
    <>
      <h1>{`Star Wars ${title}`}</h1>
      <table className="gridTable">
        <thead>
          <tr>
            {(isCustom ? customHeader : header)
              .map((colName) => (
                <th key={colName}>{colName}</th>
              ))}
            {!!actions.length && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {values.map((row) => (
            <tr key={row.name || row.episode_id}>
              {(isCustom ? customHeader : header).map((colName) => (
                <td key={colName}>
                  {dataSelector(row[colName])}
                </td>
              ))}
              {!!actions.length
              && (
              <td className="gridActions">
                <Actions data={actions} row={row} />
              </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Grid;

Grid.propTypes = {
  data: object.isRequired,
  isCustom: bool,
};

Grid.defaultProps = {
  isCustom: false,
};
