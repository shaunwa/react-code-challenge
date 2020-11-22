# React Developer Recruitment Task

## The task:
Clone this app - At the start you have a simple application which displays planets from Star Wars in grid.
Your task is to upgrade it respecting the principles from our Tech Stack (listed in the must-have, good to
have and "paying attention to" also)

1. Replace the data with dynamic data from https://swapi.dev/api/planets/
2. Planets grid have two buttons - follow the instructions in console.logs
3. Create another action which will redirect to Planet details page
4. Create another action which will open modal with form with fields:
- name - text
- rotation_period - number
- orbital_period - number
- diameter - number
- climate - text
- gravity - text
- terrain - dropdown
- surface_water - number
- all fields should be required,
- on form submit, close modal and show random success/error message (there is no endpoint)
5. Update the Grid component so that the display of actions is conditional
6. Make displaying ‘Go to Films’ and ‘Go to Residents’ dependent on whether or not they exist
7. Update the Grid component so header data will contain type of value and if it’s number
align to right
8. Add two custom columns to Planet grid - Residents and Films which will contain
a number of them. Try to do that by modifying Planets component in App component and
only prepare Planets component to be more customizable, in case we would like to
use origin Planet components in other places

## Tech stack:
- react (CRA starter)
- react-router
- redux

## Must-have:
- React & Redux
- PropTypes
- Usage of react-router for multiple pages

## Good to have:
- using function components (with hooks) instead of class components

## Paying attention to:
- How you split code for components
- Reusability of the components
- Code repetition and reusability
- Working in accordance with good practices in general

## Delivery
Open a PR and send us a message with your Github username and will review! We look forward to your submission :)