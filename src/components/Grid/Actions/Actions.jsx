import React from 'react';
import {
  string, shape, arrayOf, func,
} from 'prop-types';
import Action from './Action';
import { planetProps } from '../../../helpers/propsInterfaces';

const Actions = ({ data, row }) => (
  <>
    {data.map((actionData) => (
      <Action data={actionData} row={row} key={actionData.label} />
    ))}
  </>
);

export default Actions;

Actions.propTypes = {
  data: arrayOf(shape({
    columnName: string,
    label: string,
    action: func,
  })).isRequired,
  row: planetProps.isRequired,
};
