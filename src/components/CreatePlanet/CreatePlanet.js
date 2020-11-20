import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../Form';
import AppModal from '../AppModal';

const initalState = () => ({
  name: '',
  rotation_period: '',
  orbital_period: '',
  diameter: '',
  climate: '',
  gravity: '',
  terrain: '',
  surface_water: '',
});

function CreatePlanet() {
  const [planet, setPlanet] = useState(initalState);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlanet(initalState);
    toast.success("Successfully submitted");
    toggleModal();
  };

  const handleChange = (e) => {
    setPlanet(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };


  return (
    <div>
      <AppModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalButton="Create Planet"
        closeButton="X">
        <Form handleChange={handleChange} handleSubmit={handleSubmit} data={planet} />
      </AppModal>
    </div>
  );
}


export default CreatePlanet;
