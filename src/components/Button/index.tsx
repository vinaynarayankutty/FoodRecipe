import React from 'react';
import {
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import styles from './Styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  testID?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  type = 'primary',
  backgroundColor = type === 'primary' ? '#00c1cd' : 'white',
  borderColor = 'transparent',
  titleColor = type === 'primary' ? 'white' : '#00c1cd',
  width,
  height,
  style,
  titleStyle,
  testID = 'custom-button',
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor, borderColor, width, height},
        style,
      ]}>
      <Text
        style={[styles.buttonText, {color: titleColor}, titleStyle]}
        testID={`${testID}-text`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
