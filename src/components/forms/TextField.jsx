/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string } from 'prop-types';
import { inputProps, metaProps } from '../../helpers/propsInterfaces';

export const TextField = ({
  type, placeholder, input, meta: { touched, error, active },
}) => (
  <>
    <div className="add_planet__input-wrapper">
      <input {...input} type={type} placeholder={placeholder} className="add_planet__input" autoComplete="username" />
    </div>
    {(!touched || active || !error) && <div className="add_planet__input-instructions">{`Type ${placeholder} here: only ${type} allowed`}</div>}
    {(touched && !active) && ((error && <div className="add_planet__input-instructions--error">{error}</div>))}
  </>
);

TextField.propTypes = {
  meta: metaProps.isRequired,
  input: inputProps.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
};
