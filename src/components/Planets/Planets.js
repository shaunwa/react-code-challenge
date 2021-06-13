
import ApiSlice from '../store/ApiSlice';
import { useEffect, useState } from 'react';
import { fetchApiData } from '../store/ApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import General from '../General/General';

function Planets() {

  
  const dispatch = useDispatch();
  const data= useSelector((state) => state.api.data);
 
console.log(data)
  useEffect(() => {
    dispatch(fetchApiData('/'));



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
    'films'
  ];

  const actions = [
		{
			label: 'Go to Films',
			action: (row) => {
				console.log(`redirect to grid with ${row.films.length} Films`);
			},
		},
		{
			label: 'Go to Residents',
			action: (row) => {
				console.log(`redirect to grid with ${row.residents.length} Residents`);
			},
		},
		{
			label: 'Planet Details Page',
			action: (row) => {
				console.log(`redirect to grid with ${row.residents.length} Residents`);
			},
		},
		{
			label: 'Open Modal',
			action: (row) => {
				console.log(`redirect to grid with ${row.residents.length} Residents`);
			},
		},
  ];


  return (
    <div className='App'>
      <General results={data.results} actions={actions} header={header} data={data.results}/>
    </div>
  );
}

export default Planets;
