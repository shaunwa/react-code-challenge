import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('body');

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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [planet, setPlanet] = useState(initalState);

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
      <button onClick={openModal}>Open Modal</button>
      <ToastContainer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Planet"
      >
        <button onClick={closeModal}>close</button>
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={planet.name} onChange={handleChange} required /><br />

          <label htmlFor="rotation_period">Rotation period</label>
          <input type="text" value={planet.rotation_period} id="rotation_period" name="rotation_period" onChange={handleChange} required /><br />

          <label htmlFor="orbital_period">Orbitation period</label>
          <input type="text" value={planet.orbital_period} id="orbital_period" name="orbital_period" onChange={handleChange} required /><br />

          <label htmlFor="diameter">Diameter</label>
          <input type="text" value={planet.diameter} id="diameter" name="diameter" onChange={handleChange} required /><br />

          <label htmlFor="climate">Climate</label>
          <input type="text" value={planet.climate} id="climate" name="climate" onChange={handleChange} required /><br />

          <label htmlFor="gravity">Gravity</label>
          <input type="text" value={planet.gravity} id="gravity" name="gravity" onChange={handleChange} required /><br />

          <label htmlFor="terrain">Terrian</label>
          <input type="text" value={planet.terrain} id="terrain" name="terrain" onChange={handleChange} required /><br />

          <label htmlFor="surface_water">Surface water</label>
          <input type="text" value={planet.surface_water}  id="surface_water" name="surface_water" onChange={handleChange} required /><br />

          <input type="Submit" />
        </form>
      </Modal>
    </div>
  );
}


export default CreatePlanet;
