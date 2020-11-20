import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFormVisibility } from '../../../redux/slices/planetsSlice';
import AddPlanetForm from '../../forms/AddPlanetForm';
import './AddPlanetAction.css';

const AddPlanetAction = () => {
  const [classModifier, setClassModifier] = useState('hidden');
  const isFormVisible = useSelector(selectFormVisibility);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isFormVisible) {
      setClassModifier('');
    }
    if (!isFormVisible) {
      setClassModifier('--hidden');
    }
  }, [isFormVisible]);
  return (
    <>
      <div className={`form_container${classModifier}`} />
      <AddPlanetForm
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddPlanetAction;
