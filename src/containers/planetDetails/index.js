import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Grid } from "../../components";
import { ROUTES } from "../../route/routes.constant";
const header = [
  "climate",
  "diameter",
  "gravity",
  "name",
  "orbital_period",
  "population",
  "rotation_period",
  "surface_water",
  "terrain",
  "url",
  "created",
  "edited",
];
const PlanetDetails = () => {
  const location = useLocation();
  const history = useHistory();

  const { data } = location;

  const actions = [
    {
      label: "Back",
      action: () => {
        history.push({
          pathname: ROUTES.HOME,
        });
      },
    },
  ];

  return (
    <div className="text-center">
      <h1>Information</h1>
      <Grid data={{ header: header, values: [data], actions: actions }} />
      <h1>Films</h1>

      {data?.films?.length > 0 &&
        data?.films.map((i) => (
          <div key={i.toString()}>
            <a target="_blank" href={i}>{i}</a>
          </div>
        ))}

      <h1>Residents</h1>
      {data?.residents?.length > 0 &&
        data?.residents.map((i) => (
          <div key={i.toString()}>
            <a target="_blank" href={i}>{i}</a>
          </div>
        ))}
    </div>
  );
};
export default PlanetDetails;
