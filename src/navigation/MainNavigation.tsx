import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigation from './TabNavigation';
import CreateRecipeScreen from '../screens/CreateRecipeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import {Meal} from '../types';

export type RootStackParamList = {
  Landing: undefined;
  RecipeDetails: {itemData?: Meal} | undefined;
};

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Landing" component={TabNavigation} />
        <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
