/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { metaProps } from '../../helpers/propsInterfaces';

// eslint-disable-next-line import/prefer-default-export
export const PasswordField = ({ input, meta: { touched, error, active } }) => {
  const [fieldType] = useState('password');

  return (
    <>
      <div className="add_planet__input-wrapper">
        <input {...input} type={`${fieldType}`} name="password" placeholder="Password" className="add_planet__input" autoComplete="current-password" />
      </div>
      {(!touched || active || !error) && <div className="add_planet__input-instructions">Type valid Password min 8</div>}
      {(touched && !active) && ((error && <div className="add_planet__input-instructions--error">{error}</div>))}
    </>
  );
};

PasswordField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: metaProps.isRequired,
};
