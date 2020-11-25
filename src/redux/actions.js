import { SET_PLANETS, SET_PLANET, SET_RF, SET_MODAL } from "./types";
import axios from "axios";



//getallplanets
export const getPlanets = () => (dispatch) => {
  console.log("here");
  axios.get("https://swapi.dev/api/planets/").then((res) => {
    const values = res.data.results;
    
    console.log(res);
    const header = Object.keys(res.data.results[0]).filter(
      (el) => !["created", "edited", "url"].includes(el)
    );
    const shows = res.data.results.map(el => el.residents.length>0? true:false)

    const actions = [
      {
        label: "Go to Films",
        show : (row) => {return row.films.length>0 ? true: false},
        toLink :'/films',
        action: (row) => {
            dispatch(getRF(row.films));
            console.log(row);
        },
      },
      {
        label: "Go to Residents",
        toLink :'/residents',
        shows : shows,
        action: (row) => {
           dispatch(getRF(row.residents));
          console.log(row);
        },
      },
      {
        label: "Go to details",
        toLink: "/planet",
        action: (row) => {
         dispatch(getPlanet(row.url)) ;
          console.log(row.url);
        },
      },
      {
        label: "Add Planet",
        action: ( ) => {
            dispatch(openModal())
            
        },
      },
    ];
    const data = { header, values, actions,shows };
    dispatch({
      type: SET_PLANETS,
      payload: data,
    });
  });
};

//getOnePlanet
export const getPlanet = (url) => (dispatch) => {
  axios.get(url).then((res) => {
    console.log("hounikaya");
    const values = [res.data];
    console.log(res);
    const header = Object.keys(res.data).filter(
      (el) => !["created", "edited", "url"].includes(el)
    );
    const actions = [
      {
        toLink: "/",
        label: "back to planets",
        action: (row) => {
         
        },
      },
    ];
    const data = { header, values, actions };
    dispatch({
      type: SET_PLANET,
      payload: data,
    });
  });
};

//get REsident/Films
export const getRF = (url) => (dispatch) => {
  const tab = [];
  url.forEach((e) =>
    axios.get(e).then((res) => {
      tab.push(res.data);
      const values = tab;
       
      const header = Object.keys(tab[0]).filter(
        (el) => !["created", "edited", "url" ,"homeworld"].includes(el)
      );
      const actions = [
        { 
          toLink: "/",
          label: "back to planets",
          action: (row) => {
          },
        },
      ];
      const data = { header, values, actions };
      dispatch({
        type: SET_RF,
        payload: data,
      });
    })
  );
};

export const openModal =() => (dispatch) =>{
    
        dispatch({
            type: SET_MODAL,
            payload: true,
          })
      
}

export const closeModal =() => (dispatch) =>{
    
    dispatch({
        type: SET_MODAL,
        payload: false,
      })
  
}