import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Grid } from "../../components";
import { ROUTES } from "../../route/routes.constant";
const header = ["link"];
const FilmList = () => {
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
      <h1>Films</h1>
      <Grid
        type="single"
        data={{ header: header, values: data, actions: actions }}
      />
    </div>
  );
};
export default FilmList;
