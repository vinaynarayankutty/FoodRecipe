import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
    emailAddress: '',
    fullname: 'User',
  },
  reducers: {
    selectAuthenicated: (state, action) => {
      state.authenticated = action.payload;
    },
    selectEmailAddress: (state, action) => {
      state.emailAddress = action.payload;
    },
    selectFullname: (state, action) => {
      state.fullname = action.payload;
    },
  },
});

export const {selectAuthenicated, selectEmailAddress, selectFullname} =
  authSlice.actions;
export default authSlice.reducer;
