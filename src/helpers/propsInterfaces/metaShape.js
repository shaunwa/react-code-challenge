import { bool, string, shape } from 'prop-types';

const metaShape = shape({
  touched: bool,
  error: string,
  active: bool,
});

export default metaShape;
