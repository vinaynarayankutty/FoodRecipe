// src/types/index.ts

export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
}

export interface MealDetailResponse {
  meals: Meal[] | null;
}

export interface Category {
  strCategory: string;
}

export interface CategoryListResponse {
  meals: Category[];
}

export interface MealListResponse {
  meals: Meal[];
}

export interface Ingredients {
  name: string;
  measure: string;
}
