import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Styles';
import Serves from '../../assets/svgs/Serves';
import Clock from '../../assets/svgs/Clock';

interface DetailTileProps {
  type: 'serves' | 'time';
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric';
}

const DetailTile: React.FC<DetailTileProps> = ({
  type,
  value,
  onChangeText,
  placeholder = '',
  keyboardType = 'numeric',
}) => {
  return (
    <View style={styles.container} testID="detail-tile">
      <View style={styles.leftContainer} testID="left-container">
        <View style={[styles.servesContainer]} testID="icon-container">
          {type === 'serves' ? <Serves /> : <Clock />}
        </View>
        <Text style={styles.tileTitle} testID="tile-title">
          {type === 'serves' ? 'Serves' : 'Cook Time (mins)'}
        </Text>
      </View>

      <TextInput
        testID="detail-input"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default DetailTile;
