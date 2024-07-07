import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Styles';

interface IngredientCardProps {
  itemName: string;
  itemQuantity: string;
}

const IngredientCard: React.FC<IngredientCardProps> = ({
  itemName,
  itemQuantity,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={[styles.imageContainer]} testID="image-container">
          <Image
            source={{
              uri: `https://www.themealdb.com/images/ingredients/${itemName}-Small.png`,
            }}
            style={styles.image}
            testID="ingredient-image"
          />
        </View>
        <Text testID="item-name" style={styles.tileTitle}>
          {itemName}
        </Text>
      </View>
      <Text testID="item-quantity" style={styles.quantity}>
        {itemQuantity}
      </Text>
    </View>
  );
};

export default IngredientCard;
