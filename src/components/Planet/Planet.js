
import ApiSlice from '../store/ApiSlice';
import { useEffect, useState } from 'react';
import { fetchApiData } from '../store/ApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import General from '../General/General';
import { useParams } from 'react-router-dom';
import { apiActions } from '../store/ApiSlice';

const Planet = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.api.data);
    console.log(data);
    const { id } = useParams();
   

    
    const updatedResults = data.results?.filter((planet,index) => planet.name === id);
   
   

    

    useEffect(() => {

        
        dispatch(fetchApiData(`/`));
        
	}, [dispatch]);

	const header = [
		'name',
		'rotation_period',
		'orbital_period',
		'diameter',
		'climate',
		'gravity',
		'terrain',
		'surface_water',
		'population',
		'residents',
		'films',
	];

	const actions = [
		{
			label: 'Go Back',
			action: (row) => {
				console.log(`redirect to grid with ${row.films.length} Films`);
			},
		},
		
	];

	return (
		<div className="App">
            <General data={updatedResults}  actions={actions} header={header} />
		</div>
	);
};

export default Planet;
