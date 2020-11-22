import React from "react";
import Modal from "react-modal";
import Alert from "../alert";

const CreatePlanetModal = ({ onClose, show, onSubmit, form,setForm,error }) => {
  const handleChange=(evt)=> {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  }
  return (
    <div>
      <Modal isOpen={show}>
      {error!==''&&<Alert text={error} type="error" />}
        <button onClick={onClose}>Close Modal</button>
      
        <div className="mt-25">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mt-25">
          <input
            className="input"
            type="number"
            name="rotation_period"
            placeholder="Rotation Period"
            value={form.rotation_period}
            onChange={handleChange}
          />
        </div>
        <div className="mt-25">
          <input
            className="input"
            type="number"
            name="orbital_period"
            placeholder="Orbital Period"
            value={form.orbital_period}
            onChange={handleChange}
          />
        </div>
        <div className="mt-25">
          <input
            className="input"
            type="number"
            name="diameter"
            placeholder="diameter"
            value={form.diameter}
            onChange={handleChange}
          />
        </div>
        <div className="mt-25">
          <input
            className="input"
            type="text"
            name="climate"
            placeholder="climate"
            value={form.climate}
            onChange={handleChange}
          />
        </div>
        <div className="mt-25">
          <input
            className="input"
            type="text"
            name="gravity"
            placeholder="gravity"
            value={form.gravity}
            onChange={handleChange}
          />
        </div>
        <div className="mt-25">
          <input
            className="input"
            type="text"
            name="terrain"
            placeholder="terrain"
            value={form.terrain}
            onChange={handleChange}
          />
        </div>
        <div className="mt-25">
          <input
            className="input"
            type="number"
            name="surface_water"
            placeholder="surface water"
            value={form.surface_water}
            onChange={handleChange}
          />
        </div>
        <div className="mt-25">
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default CreatePlanetModal;
