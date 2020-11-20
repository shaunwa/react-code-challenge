import { string, shape, arrayOf } from 'prop-types';

const planetShape = shape({
  climate: string,
  created: string,
  diameter: string,
  edited: string,
  films: arrayOf(string),
  gravity: string,
  name: string,
  orbital_period: string,
  population: string,
  residents: arrayOf(string),
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string,
});

export default planetShape;
