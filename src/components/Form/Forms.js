import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModalActions } from '../store/ModalSlice';
import './Form.css';

const Form = () => {
	const [formData, setFormData] = useState({});
	const nameRef = useRef();
	const rotationRef = useRef();
	const orbitalRef = useRef();
	const diameterRef = useRef();
	const climateRef = useRef();
	const gravityRef = useRef();
    const surfaceRef = useRef();
    const terrainRef = useRef();
    const form = {};
    const dispatch = useDispatch();
    


    
      

    console.log(formData);

	const btnHandler = (e) => {
        e.preventDefault();
        console.log('enter')
        if (nameRef.current.value && rotationRef.current.value && orbitalRef.current.value && diameterRef.current.value && climateRef.current.value && gravityRef.current.value && surfaceRef.current.value && terrainRef.current.value) {
            console.log('e')
            form.name = nameRef.current.value;
			form.rotation = rotationRef.current.value;
			form.orbital = orbitalRef.current.value;
			form.diameter = diameterRef.current.value;
			form.climate = climateRef.current.value;
			form.gravity = gravityRef.current.value;
			form.surface = surfaceRef.current.value;
			form.terrain = terrainRef.current.value;

            setFormData(form);
            console.log(form);


            

			dispatch(ModalActions.Toggle());
        };
       

        
        

	};
	const terrain = [
		'desert',
		'grasslands, mountains',
		'jungle, rainforests',
		'tundra, ice caves, mountain ranges',
		'swamp, jungles',
		'gas giant',
		'forests, mountains, lakes',
		'grassy hills, swamps, forests, mountains',
		'cityscape, mountains',
		'ocean',
	];

	const select = terrain.map((terr) => <option value={terr}>{terr}</option>);

	return (
		<div>
			<form className="form">
				<label htmlFor="name">name</label>
				<input type="text" id="mail" ref={nameRef} />
				<label htmlFor="rotation">rotation_period</label>
				<input type="number" id="rotation_period" ref={rotationRef} />
				<label htmlFor="orbital_period">orbital_period</label>
				<input type="number" id="orbital_period" ref={orbitalRef} />
				<label htmlFor="diameter">diameter</label>
				<input type="number" id="diameter" ref={diameterRef} />
				<label htmlFor="climate">climate</label>
				<input type="text" id="climate" ref={climateRef} />
				<label htmlFor="gravity">gravity</label>
				<input type="text" id="gravity" ref={gravityRef} />
				<label htmlFor="terrain">terrain</label>
				<select id="terrain" ref={terrainRef}>
					{select}
				</select>
				<label htmlFor="surface_water ">surface_water</label>
				<input type="text" id="surface_water" ref={surfaceRef} />
				<button class="btn" onClick={(e) => btnHandler(e)}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
