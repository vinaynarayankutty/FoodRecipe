import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackArrow from '../../assets/svgs/BackArrow';
import MenuDots from '../../assets/svgs/MenuDots';
import styles from './Styles';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/MainNavigation';
import {useSelector} from 'react-redux';
import IngredientCard from '../../components/IngredientCard';

type RecipeDetailsRouteProp = RouteProp<RootStackParamList, 'RecipeDetails'>;

const RecipeDetailsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RecipeDetailsRouteProp>();

  const savedItemData: any = route.params?.itemData;
  const {mealDetailsData} = useSelector((state: any) => state.mealDetails);
  const [ingredientsArr, setIngredientsArr] = useState<any>([]);

  useEffect(() => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = mealDetailsData[`strIngredient${i}`];
      const measure = mealDetailsData[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({ingredient, measure});
      }
    }

    setIngredientsArr(ingredients);
  }, [mealDetailsData]);

  useEffect(() => {
    if (savedItemData) {
      const ingredients = [];

      for (let i = 1; i <= 20; i++) {
        const ingredient = savedItemData[`strIngredient${i}`];
        const measure = savedItemData[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== '') {
          ingredients.push({ingredient, measure});
        }
      }

      setIngredientsArr(ingredients);
    }
  }, [savedItemData]);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation.goBack()}>
        <BackArrow />
      </TouchableOpacity>
      <MenuDots />
    </View>
  );

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {savedItemData ? savedItemData?.strMeal : mealDetailsData?.strMeal}
      </Text>
    </View>
  );

  const renderImageHolder = () => (
    <View style={[styles.imageContainer]}>
      <Image
        source={{
          uri: savedItemData
            ? savedItemData?.strMealThumb
            : mealDetailsData?.strMealThumb,
        }}
        style={styles.image}
      />
    </View>
  );

  const renderIngredients = () => {
    return (
      <>
        <View style={styles.ingredientsTitleWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <Text style={styles.itemLength}>{ingredientsArr.length} items</Text>
        </View>
        {ingredientsArr.map(
          (item: {ingredient: string; measure: string}, index: number) => {
            return (
              <IngredientCard
                key={index}
                itemName={item.ingredient}
                itemQuantity={item.measure}
              />
            );
          },
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {renderHeader()}
        {renderTitle()}
        {renderImageHolder()}
        {renderIngredients()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetailsScreen;
