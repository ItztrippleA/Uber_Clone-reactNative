import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformations: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.origin = action.payload;
    },
    setTravelTimeInformations: (state, action) => {
      state.travelTimeInformations = action.payload;
    },
  },
});

// exposing the actions to set state
export const { setDestination, setTravelTimeInformations, setOrigin } =
  navSlice.actions;

//selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformations = (state) =>
  state.nav.travelTimeInformations;

//hook up to store
export default navSlice.reducer;
