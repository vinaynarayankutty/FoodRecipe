import React from 'react';
import {render} from '@testing-library/react-native';
import IngredientCard from './index';

describe('IngredientCard', () => {
  it('renders correctly with given props', () => {
    const itemName = 'Chicken';
    const itemQuantity = '200g';

    const {getByTestId} = render(
      <IngredientCard itemName={itemName} itemQuantity={itemQuantity} />,
    );

    expect(getByTestId('image-container')).toBeTruthy();
    expect(getByTestId('item-name')).toBeTruthy();
    expect(getByTestId('item-quantity')).toBeTruthy();

    expect(getByTestId('item-name')).toHaveTextContent(itemName);
    expect(getByTestId('item-quantity')).toHaveTextContent(itemQuantity);
  });

  it('sets correct image source', () => {
    const itemName = 'Chicken';
    const {getByTestId} = render(
      <IngredientCard itemName={itemName} itemQuantity="200g" />,
    );

    const image = getByTestId('ingredient-image');
    expect(image.props.source.uri).toBe(
      `https://www.themealdb.com/images/ingredients/${itemName}-Small.png`,
    );
  });
});
