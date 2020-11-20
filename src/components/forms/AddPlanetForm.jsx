/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, reduxForm } from 'redux-form';
import { selectFormVisibility, setFormVisibility } from '../../redux/slices/planetsSlice';
import './AddPlanetForm.css';
import CustomField from './CustomField';

const data = {
  fields: [
    {
      title: 'Name',
      type: 'text',
      required: true,
    },
    {
      title: 'Rotation period',
      type: 'number',
      required: true,
    },
    {
      title: 'Orbital period',
      type: 'number',
      required: true,
    },
    {
      title: 'Diameter',
      type: 'number',
      required: true,
    },
    {
      title: 'Climate',
      type: 'text',
      required: true,
    },
    {
      title: 'Gravity',
      type: 'text',
      required: true,
    },
    {
      title: 'Terrain',
      type: 'select',
      options: [
        { label: 'Desert', value: 'desert' },
        { label: 'Grasslands', value: 'grasslands' },
        { label: 'Mountains', value: 'mountains' },
        { label: 'Jungle', value: 'jungle' },
        { label: 'Rain-forests', value: 'rain-forests' },
      ],
      required: true,
    },
    {
      title: 'Surface water',
      type: 'number',
      required: true,
    },
  ],
};

// eslint-disable-next-line import/no-mutable-exports
let AddPlanetForm = (props) => {
  const {
    handleSubmit, valid,
  } = props;
  const dispatch = useDispatch();
  const { fields } = data;
  const isFormVisible = useSelector(selectFormVisibility);
  const [classModifier, setClassModifier] = useState('--hidden');

  useEffect(() => {
    if (isFormVisible) {
      setClassModifier('');
    }
    if (!isFormVisible) {
      setClassModifier('--hidden');
    }
  }, [isFormVisible]);

  const handleCancel = () => {
    dispatch(setFormVisibility(false));
  };

  return (
    <Form onSubmit={handleSubmit} className={`add_planet${classModifier}`}>
      {fields.map((fieldData) => <CustomField {...fieldData} key={fieldData.title} />)}
      <button type="submit" disabled={!valid} onClick={handleCancel}>Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </Form>
  );
};

AddPlanetForm = reduxForm({
  form: 'AddPlanetForm',
})(AddPlanetForm);

export default AddPlanetForm;

AddPlanetForm.propTypes = {
  handleSubmit: PropTypes.func,
  valid: PropTypes.bool,
};

AddPlanetForm.defaultProps = {
  handleSubmit: () => null,
  valid: false,
};
