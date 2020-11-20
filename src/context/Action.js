import axios from "axios";
import { Context } from "./Context";
import { useContext } from "react";

export const getPlanets = (setData) => {
  axios.get("https://swapi.dev/api/planets/").then((res) => {
    setData((prev) => {
      return {
        
        header :Object.keys(res.data.results[0]).filter(el => !['created','edited','url'].includes(el)),
        values: res.data.results,
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
        
      };
    });
  });
};

export const getOnePlanet = (url, setData) => {
  axios.get(url).then((res) => {
  
    // res.filter(el =>{ res.hasOwnProprety(el})
    setData((prev) => {
      return { header :Object.keys(res.data).filter(el => !['created','edited','url'].includes(el)), values : [res.data] ,  actions : [{
        label: 'back to planets',
        action: (row) => {getPlanets(setData)}
      }]}
    });
  });
};


export const getRF = (url,setData ) => {
  const tab=[]
  url.forEach((e) =>
    axios.get(e).then((res) => {
      tab.push(res.data)
      setData((prev) => {
        return { header :Object.keys(res.data).filter(el => !['created','edited','url'].includes(el)), values : tab , actions : [{
          label: 'back to planets',
          action: (row) => {getPlanets(setData)}
        }]}
        
      });
    })
  );


};
