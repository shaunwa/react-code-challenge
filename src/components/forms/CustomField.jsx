/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from '../../helpers/inputFieldsValidation';
import { ReduxFormSelect } from './ReduxFormSelect';
import { TextField } from './TextField';

const CustomField = ({
  title, options = [], type, required: isRequired,
}) => {
  const [trimStart, setTrimStart] = useState(() => (value) => value.trimStart());
  const [validators, setValidators] = useState([]);
  const [selectOptions, setSelectOptions] = useState('');
  const [fieldToRender, setFieldToRender] = useState(() => TextField);

  useEffect(() => {
    if (isRequired) {
      setValidators((prev) => [...prev, required]);
    }
    if (type === 'select') {
      setFieldToRender(() => ReduxFormSelect);
      setSelectOptions(options);
      setTrimStart(null);
    }
  }, []);

  return (
    <Field
      type={type}
      name={title}
      placeholder={title}
      component={fieldToRender}
      validate={validators}
      options={selectOptions}
      normalize={trimStart}
    />
  );
};

export default CustomField;

CustomField.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

CustomField.defaultProps = {
  options: [],
};
