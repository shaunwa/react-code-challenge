import React from "react";
import { Route, Switch } from "react-router-dom";

import {App, PlanetDetails,FilmList,ResidentList} from "../containers";
import { ROUTES } from "./routes.constant";

export const Router = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <App />
      </Route>
      <Route exact path={ROUTES.PLANET_DETAILS}>
        <PlanetDetails />
      </Route>
      <Route exact path={ROUTES.FILM_LIST}>
        <FilmList />
      </Route>
      <Route exact path={ROUTES.RESIDENT_LIST}>
        <ResidentList />
      </Route>
    </Switch>
  );
};

