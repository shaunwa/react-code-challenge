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
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlanet(initalState);
    toast.success("Successfully submitted");
    closeModal();
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
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        modalButton="Create Planet"
        closeButton="X">
        <Form handleChange={handleChange} handleSubmit={handleSubmit} object={planet} />
      </AppModal>
    </div>
  );
}


export default CreatePlanet;
