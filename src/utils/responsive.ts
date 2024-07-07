import {Dimensions, Platform, StatusBar} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight || 0;

const AVAILABLE_HEIGHT = SCREEN_HEIGHT - STATUS_BAR_HEIGHT;

// Function to calculate responsive width
export const responsiveWidth = (widthPercent: string | number): number => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return (SCREEN_WIDTH * elemWidth) / 100;
};

// Function to calculate responsive height
export const responsiveHeight = (heightPercent: string | number): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return (AVAILABLE_HEIGHT * elemHeight) / 100;
};

// Function to calculate responsive font size
export const responsiveFontSize = (fontSize: number): number => {
  const standardScreenHeight = 812; // iPhone X height as baseline
  const scaleFactor = AVAILABLE_HEIGHT / standardScreenHeight;
  const newSize = fontSize * scaleFactor;
  return Math.round(newSize);
};

export const screenDimensions = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  availableHeight: AVAILABLE_HEIGHT,
  statusBarHeight: STATUS_BAR_HEIGHT,
};
