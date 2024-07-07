import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import * as api from '../../api/index.';
import {Meal} from '../../types';

interface MealDetailsState {
  mealDetailsData: Meal | {};
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | {};
}

// Initial state
const initialState: MealDetailsState = {
  mealDetailsData: {},
  status: 'idle',
  error: null,
};

export const fetchMealDetailsAsync = createAsyncThunk(
  'meals/fetchMealDetails',
  async (mealId: string, {rejectWithValue}) => {
    try {
      const response = await api.fetchMealDetails(mealId);
      return response.data.meals[0];
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

const mealDetailsSlice = createSlice({
  name: 'mealDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMealDetailsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchMealDetailsAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = 'succeeded';
          state.mealDetailsData = action.payload;
        },
      )
      .addCase(fetchMealDetailsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Unknown error occurred';
      });
  },
});

export default mealDetailsSlice.reducer;
