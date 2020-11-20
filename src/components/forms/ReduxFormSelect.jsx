/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Select from 'react-select';
import { inputProps, metaProps, optionsProps } from '../../helpers/propsInterfaces';

// eslint-disable-next-line import/prefer-default-export
export const ReduxFormSelect = (props) => {
  const { input, options, meta: { touched, error, active } } = props;
  return (
    <>
      <div className="add_planet__select-wrapper">
        <Select
          {...input}
          onChange={(value) => input.onChange(value)}
          onBlur={() => input.onBlur(input.value)}
          options={options}
          className="add_planet__select"
          placeholder={input.name}
        />
      </div>
      {(!touched || active || !error) && <div className="add_planet__input-instructions">Select terrain</div>}
      {(touched && !active) && ((error && <div className="add_planet__input-instructions--error">{error}</div>))}
    </>
  );
};

ReduxFormSelect.propTypes = {
  input: inputProps.isRequired,
  meta: metaProps.isRequired,
  options: optionsProps.isRequired,
};
