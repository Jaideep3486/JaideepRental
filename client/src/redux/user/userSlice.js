import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
  };
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      signInStart: (state) => {
        state.loading = true;
      },
      signInSuccess: (state, action) => {
        state.currentUser = action.payload; // this is the data comming from response
        state.loading = false;
        state.error = false;
      },
      signInFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
});

export const { // here we are exporting the user slice and states
    signInStart,
    signInSuccess,
    signInFailure,
    } = userSlice.actions;
  
  export default userSlice.reducer; // exporting reducer