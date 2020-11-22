import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Alert, CreatePlanetModal, Grid } from "../components";
import { ROUTES } from "../route/routes.constant";
import { Get } from "../utils";

const App = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showform, setShowform] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
  });
  const [error, setError] = useState("");

  const _getdata = async () => {
    const data = await Get("https://swapi.dev/api/planets/");
    if (data?.results) {
      setLoading(false);
      setData(data?.results);
    }
  };
  useEffect(() => {
    _getdata();
  }, []);

  const info = {
    header: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
    ],
    actions: [
      {
        label: "Planet Details",
        action: (row) => {
          history.push({
            pathname: ROUTES.PLANET_DETAILS,
            data: row,
          });
        },
      },
      {
        label: "Create Planet",
        action: () => {
          setShowform(true);
        },
      },
      {
        label: "Go to Films",
        action: (row) => {
          history.push({
            pathname: ROUTES.FILM_LIST,
            data: row.films,
          });
        },
      },
      {
        label: "Go to Residents",
        action: (row) => {
          history.push({
            pathname: ROUTES.RESIDENT_LIST,
            data: row.residents,
          });
        },
      },
    ],
  };

  const _onadd = () => {
    if (form.name === "") {
      setError("Name is mandatory");
    } else if (form.rotation_period === "") {
      setError("rotation period is mandatory");
    } else if (form.orbital_period === "") {
      setError("orbital period is mandatory");
    } else if (form.diameter === "") {
      setError("diameter is mandatory");
    } else if (form.climate === "") {
      setError("climate is mandatory");
    } else if (form.gravity === "") {
      setError("gravity is mandatory");
    } else if (form.terrain === "") {
      setError("terrain is mandatory");
    } else if (form.surface_water === "") {
      setError("surface water is mandatory");
    } else {
      setError("");

      let newArray = [...data];
      newArray.push({ ...form, films: [], residents: [] });
      setData(newArray);
      setForm({
        name: "",
        rotation_period: "",
        orbital_period: "",
        diameter: "",
        climate: "",
        gravity: "",
        terrain: "",
        surface_water: "",
      });
      setShowform(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  };
  return (
    <div className="text-center">
      <h1>Star Wars Planets</h1>
      {success && <Alert text="Planet Added Successfully" type="success" />}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="App">
          <Grid
            data={{ header: info.header, values: data, actions: info.actions }}
          />
          <CreatePlanetModal
            onClose={() => {
              setShowform(false);
            }}
            show={showform}
            onSubmit={() => {
              _onadd();
            }}
            form={form}
            setForm={setForm}
            error={error}
          />
        </div>
      )}
    </div>
  );
};

export default App;
