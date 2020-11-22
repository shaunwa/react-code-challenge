// import React from "react";
// import { useHistory } from "react-router-dom";

// import "./Planets.css";
// import Grid from "../Grid";
// import { ROUTES } from "../../route/routes.constant";

// const Planets = ({ item }) => {
//   const history = useHistory();
//   const data = {
//     header: [
//       "name",
//       "rotation_period",
//       "orbital_period",
//       "diameter",
//       "climate",
//       "gravity",
//       "terrain",
//       "surface_water",
//       "population",
//     ],
//     actions: [
//       {
//         label: "Planet Details",
//         action: (row) => {
//           history.push({
//             pathname: ROUTES.PLANET_DETAILS,
//             data: row,
//           });
//         },
//       },
//       {
//         label: "Create Planet",
//         action: (row) => {
//           console.log(
//             `redirect to grid with ${row.residents.length} Residents`
//           );
//         },
//       },
//       {
//         label: "Go to Films",
//         action: (row) => {
//           history.push({
//             pathname: ROUTES.FILM_LIST,
//             data: row.films,
//           });
//         },
//       },
//       {
//         label: "Go to Residents",
//         action: (row) => {
//           history.push({
//             pathname: ROUTES.RESIDENT_LIST,
//             data: row.residents,
//           });
//         },
//       },
//     ],
//   };
//   return (
//     <div className="App">
//       <Grid
//         data={{ header: data.header, values: item, actions: data.actions }}
//       />
//     </div>
//   );
// };

// export default Planets;
