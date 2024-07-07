import axios from 'axios';
import {CategoryListResponse, MealListResponse} from '../types';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchCategories = () =>
  api.get<CategoryListResponse>('list.php?c=list');

export const fetchMealsByCategory = (category: string) =>
  api.get<MealListResponse>(`filter.php?c=${category}`);

export const fetchMealDetails = (id: string) =>
  api.get<any>(`lookup.php?i=${id}`);

export default api;
