import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ApiSlice = createSlice({
    name: 'planets',
    initialState: { data: {}},
    reducers: {
        ApiData(state, action) {
            
            console.log(action);
            state.data = action.payload.data;
        },
        GetPlanet(state, action) {
            console.log(state.data.results)
            state.data.results = state.data.results.filter((planet,index) => index+1 === action.payload);
        },
        GetResidents(state, action) {
            
            
        }
        
    }
});

//redux thunk to fetch data from API
export const fetchApiData = (id) => {
    return async (dispatch) => {

        const sendRequest = async () => {

            const { data } = await axios.get(`https://swapi.dev/api/planets${id}`);
            console.log(data);

            if (data) {
                dispatch(ApiSlice.actions.ApiData({ data }));
            }


        };

        try {
            sendRequest();
        }
        catch (error) {
            console.log(error);
        }
        
    }
}

export const apiActions = ApiSlice.actions;
export default ApiSlice;