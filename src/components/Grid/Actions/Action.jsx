import React, { useEffect, useState } from 'react';
import { string, shape, func } from 'prop-types';
import { planetProps } from '../../../helpers/propsInterfaces';

const Action = ({ data, row }) => {
  const { columnName, label, action } = data;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (columnName !== undefined && row[columnName].length === 0) {
      setIsVisible(false);
    }
  }, [columnName]);

  return (
    <>
      {isVisible && <button key={label} type="button" onClick={() => action(row)}>{label}</button>}
    </>
  );
};

export default Action;

Action.propTypes = {
  data: shape({
    columnName: string,
    label: string,
    action: func,
  }).isRequired,
  row: planetProps.isRequired,
};
