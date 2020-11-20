import React, { useState, useEffect } from "react";
import { getOnePlanet, getRF } from "./Action";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [residents, setResidents] = useState([""]);
    const [errors, setErrors] = useState([""]);
    const [data,setData] = useState({header : [
      'name',
        'rotation_period',
        'orbital_period',
        'diameter',
        'climate',
        'gravity',
        'terrain',
        'surface_water',
        'population'
      ],
    values : [],
      actions : [ {
        label: 'Go to Films',
        action: (row) => {getRF(row.films,setData);console.log(`redirect to grid with ${row.films.length} Films`)}
      },
      {
        label: 'Go to Residents',
        action: (row) => {getRF(row.residents,setData); console.log(row)}
      },
      {
        label: 'Go to details',
        action: (row) => {getOnePlanet(row.url,setData); console.log(row.url)}
      },
      {
        label: 'Add Planet',
        action: (row) => {getOnePlanet(row.url,setData); console.log(row.url)}
      }]
})
    return (
    <Context.Provider
      value={{

        data,
        setData,
        errors,
        setErrors,
        residents,
        setResidents
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
