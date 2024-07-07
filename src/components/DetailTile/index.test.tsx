import React from 'react';
import {render} from '@testing-library/react-native';
import DetailTile from './index';

// Mock the SVG components
jest.mock('../../assets/svgs/Serves', () => 'Serves');
jest.mock('../../assets/svgs/Clock', () => 'Clock');

describe('DetailTile', () => {
  it('renders correctly for serves type', () => {
    const {getByTestId} = render(
      <DetailTile type="serves" value="" onChangeText={() => {}} />,
    );

    expect(getByTestId('detail-tile')).toBeTruthy();
    expect(getByTestId('detail-input')).toBeTruthy();
  });
});
