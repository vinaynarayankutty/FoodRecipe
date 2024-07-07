import React, {useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppDispatch, RootState} from '../../store/store';
import {toggleLikedMeal} from '../../store/reducers/mealSlice';
import {Meal} from '../../types';
import Bookmark from '../../assets/svgs/Bookmark';
import {trendingPosts} from '../../constants';
import styles from './Styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/MainNavigation';
import {fetchMealDetailsAsync} from '../../store/reducers/mealDetailsSlice';

const SavedRecipeScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {savedRecipes} = useSelector((state: RootState) => state.meals);

  const handleLikePress = useCallback(
    (meal: Meal) => {
      dispatch(toggleLikedMeal(meal));
    },
    [dispatch],
  );

  const isSaved = useCallback(
    (mealId: string) => {
      return savedRecipes.some(meal => meal.idMeal === mealId);
    },
    [savedRecipes],
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>Saved Recipes</Text>
    </View>
  );

  const renderSavedItems = ({item}: {item: Meal}) => (
    <TouchableOpacity
      style={styles.itemsWrapper}
      onPress={() => {
        if ('newRecipe' in item !== true) {
          dispatch(fetchMealDetailsAsync(item.idMeal));
          navigation.navigate('RecipeDetails');
        } else {
          navigation.navigate('RecipeDetails', {itemData: item});
        }
      }}>
      <Image source={{uri: item.strMealThumb}} style={styles.mealsBanner} />
      <Text style={styles.mealTitle}>{item.strMeal}</Text>
      <TouchableOpacity
        style={[styles.bookmarkBtn]}
        onPress={() => handleLikePress(item)}>
        <Bookmark color={isSaved(item.idMeal) ? '#00c1cd' : '#C1C1C1'} />
      </TouchableOpacity>
      <View style={styles.authorDetails}>
        <Image
          source={{uri: trendingPosts[0].profileImg}}
          style={styles.profileImg}
        />
        <Text style={styles.author}>By {trendingPosts[0].author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={savedRecipes}
        keyExtractor={item => item.idMeal}
        renderItem={renderSavedItems}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={[
          styles.contentContainerStyle,
          {paddingBottom: insets.bottom + 16},
        ]}
      />
      {savedRecipes.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Save some recipes to see the list
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SavedRecipeScreen;
