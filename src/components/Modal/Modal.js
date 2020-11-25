import React, { useState } from "react";
import "./modal.css";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
function Modal() {
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    rotation_period: "",
    orbital_period: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
  });
  //const [submit, setSubmit] = useState(true)
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function validateFull(e) {
   
    console.log(Object.values(inputs));
    const submit = !Object.values(inputs).includes("");

    if (submit) {
     
      dispatch(closeModal());
    } else {
        e.preventDefault();
      alert("empty fields");
    }
  }

  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-content">
        <form onSubmit={validateFull}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label>
            rotation period :
            <input
              type="number"
              name="rotation_period"
              value={inputs.rotation_period}
              onChange={handleChange}
            />
          </label>
          <label>
            orbital period :
            <input
              type="number"
              name="orbital_period"
              value={inputs.orbital_period}
              onChange={handleChange}
            />
          </label>
          <label>
            climate:
            <input
              type="text"
              name="climate"
              value={inputs.climate}
              onChange={handleChange}
            />
          </label>
          <label>
            gravity :
            <input
              type="text"
              name="gravity"
              value={inputs.gravity}
              onChange={handleChange}
            />
          </label>
          <label>
            terrain :
            <select
              name="terrain"
              value={inputs.terrain}
              onChange={handleChange}
            >
              <option value="terrain1">terrain1</option>
              <option value="terrain2">terrain2</option>
              <option value="terrain3">terrain3</option>
            </select>
          </label>
          <label>
            surface water :
            <input
              type="number"
              name="surface_water"
              value={inputs.surface_water}
              onChange={handleChange}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
