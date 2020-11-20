import { shape, string, func } from 'prop-types';

const inputShape = shape({
  name: string,
  onChange: func,
  onBlur: func,
  value: string,
});

export default inputShape;
