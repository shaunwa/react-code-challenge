import { string, shape, arrayOf } from 'prop-types';

const optionsShape = arrayOf(shape({
  label: string,
  value: string,
}));

export default optionsShape;
