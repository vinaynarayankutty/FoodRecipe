import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import mealsReducer from './mealSlice';
import mealDetailsReducer from './mealDetailsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  meals: mealsReducer,
  mealDetails: mealDetailsReducer,
});

export default rootReducer;
