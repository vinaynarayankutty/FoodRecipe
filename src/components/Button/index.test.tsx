import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './index';

describe('Button', () => {
  it('renders correctly with default props', () => {
    const {getByTestId} = render(
      <Button title="Test Button" onPress={() => {}} />,
    );
    const buttonElement = getByTestId('custom-button');
    const textElement = getByTestId('custom-button-text');
    expect(buttonElement).toBeTruthy();
    expect(textElement).toHaveTextContent('Test Button');
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Button title="Test Button" onPress={onPressMock} />,
    );
    const buttonElement = getByTestId('custom-button');
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
