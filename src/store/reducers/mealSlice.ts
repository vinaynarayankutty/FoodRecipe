import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import * as api from '../../api/index.';
import {Category, Meal} from '../../types';

interface MealsState {
  categories: Category[];
  selectedCategory: string | null;
  meals: Meal[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  savedRecipes: Meal[];
}

const initialState: MealsState = {
  categories: [],
  selectedCategory: null,
  meals: [],
  status: 'idle',
  error: null,
  savedRecipes: [],
};

export const fetchCategoriesAsync = createAsyncThunk<
  Category[],
  void,
  {rejectValue: string}
>('meals/fetchCategories', async (_, {rejectWithValue, dispatch}) => {
  try {
    const response = await api.fetchCategories();
    const categories = response.data.meals;
    if (categories.length > 0 && !initialState.selectedCategory) {
      dispatch(setSelectedCategory(categories[0].strCategory));
      await api.fetchMealsByCategory(categories[0].strCategory);
    }

    return categories;
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const fetchMealsByCategoryAsync = createAsyncThunk<
  Meal[],
  string,
  {rejectValue: string}
>('meals/fetchMealsByCategory', async (category, {rejectWithValue}) => {
  try {
    const response = await api.fetchMealsByCategory(category);
    return response.data.meals;
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    toggleLikedMeal: (state, action: PayloadAction<any>) => {
      const index = state.savedRecipes.findIndex(
        meal => meal.idMeal === action.payload.idMeal,
      );
      if (index !== -1) {
        // If meal is already liked, remove it
        state.savedRecipes.splice(index, 1);
      } else {
        // If meal is not liked, add it
        state.savedRecipes.push(action.payload);
      }
    },
    addNewRecipe: (state, action: PayloadAction<any>) => {
      state.savedRecipes.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategoriesAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchCategoriesAsync.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.status = 'succeeded';
          state.categories = action.payload;
        },
      )
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Unknown error occurred';
      })
      .addCase(fetchMealsByCategoryAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchMealsByCategoryAsync.fulfilled,
        (state, action: PayloadAction<Meal[]>) => {
          state.status = 'succeeded';
          state.meals = action.payload;
        },
      )
      .addCase(fetchMealsByCategoryAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Unknown error occurred';
      });
  },
});

export const {setSelectedCategory, toggleLikedMeal, addNewRecipe} =
  mealsSlice.actions;
export default mealsSlice.reducer;
