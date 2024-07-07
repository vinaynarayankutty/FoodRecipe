import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomCarousel from '../../components/CustomCarousel';
import Button from '../../components/Button';
import {AppDispatch, RootState} from '../../store/store';
import {
  fetchCategoriesAsync,
  fetchMealsByCategoryAsync,
  setSelectedCategory,
  toggleLikedMeal,
} from '../../store/reducers/mealSlice';
import RightArrow from '../../assets/svgs/RightArrow';
import Bookmark from '../../assets/svgs/Bookmark';
import {responsiveHeight, screenDimensions} from '../../utils/responsive';
import {trendingPosts} from '../../constants';
import {Category, Meal} from '../../types';
import styles from './Styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/MainNavigation';
import {fetchMealDetailsAsync} from '../../store/reducers/mealDetailsSlice';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const insets = useSafeAreaInsets();

  const [greeting, setGreeting] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [loadingImages, setLoadingImages] = useState<{[key: string]: boolean}>(
    {},
  );
  const name = useSelector((state: RootState) => state.auth.fullname);
  const {categories, selectedCategory, meals, savedRecipes} = useSelector(
    (state: RootState) => state.meals,
  );

  useEffect(() => {
    const now = new Date();
    now.getHours() > 12
      ? setGreeting('Good afternoon')
      : setGreeting('Good morning');
  }, []);
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const handleCategoryPress = useCallback(
    (category: string) => {
      if (category !== selectedCategory) {
        dispatch(setSelectedCategory(category));
        dispatch(fetchMealsByCategoryAsync(category));
      }
    },
    [dispatch, selectedCategory],
  );

  const handleImageLoad = useCallback((mealId: string) => {
    setLoadingImages(prev => ({...prev, [mealId]: false}));
  }, []);

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

  const renderGreeting = () => (
    <>
      <Text testID="greetingText" style={styles.greeting}>
        {greeting},
      </Text>
      <Text testID="nameText" style={styles.greeting}>
        {name}!
      </Text>
    </>
  );

  const renderSearchBar = () => (
    <TextInput
      placeholder="Search recipes"
      style={styles.input}
      value={searchInput}
      onChangeText={(text: string) => setSearchInput(text)}
    />
  );

  const renderTrendingNow = () => (
    <>
      <View style={styles.rowContainer}>
        <Text style={styles.sectionTitle}>Trending now 🔥</Text>
        <TouchableOpacity style={styles.seeBtnContainer}>
          <Text style={styles.seeAllText}>See all</Text>
          <RightArrow />
        </TouchableOpacity>
      </View>
      <CustomCarousel
        data={trendingPosts}
        width={screenDimensions.width * 0.7}
        height={screenDimensions.width * 0.6}
        renderItem={({item}) => {
          return (
            <View style={styles.trendingContainer}>
              <Image
                source={{uri: item.strMealThumb}}
                style={styles.trendingPostImg}
              />
              <Text style={styles.mealDescription} numberOfLines={1}>
                {item.mealDescription}
              </Text>
              <View style={styles.authorDetails}>
                <Image
                  source={{uri: item.profileImg}}
                  style={styles.profileImg}
                />
                <Text style={styles.author}>By {item.author}</Text>
              </View>
            </View>
          );
        }}
      />
    </>
  );

  const renderCategoryList = useCallback(
    ({item}: {item: Category}) => (
      <Button
        type={selectedCategory === item.strCategory ? 'primary' : 'secondary'}
        onPress={() => handleCategoryPress(item.strCategory)}
        title={item.strCategory}
        style={styles.categoryItem}
        height={responsiveHeight(6)}
      />
    ),
    [selectedCategory, handleCategoryPress],
  );

  const memoizedCategoryList = useMemo(
    () => (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.strCategory}
        renderItem={renderCategoryList}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    ),
    [categories, renderCategoryList],
  );

  const renderPopularCategory = () => (
    <View style={styles.categoryContainer}>
      <Text style={styles.sectionTitle}>Popular category</Text>
      {memoizedCategoryList}
    </View>
  );

  const renderCategoryItems = useCallback(
    ({item}: {item: Meal}) => (
      <TouchableOpacity
        style={styles.mealItem}
        onPress={() => {
          dispatch(fetchMealDetailsAsync(item.idMeal));
          navigation.navigate('RecipeDetails');
        }}>
        <View style={styles.imageContainer}>
          {loadingImages[item.idMeal] !== false && (
            <ActivityIndicator
              style={styles.imageLoader}
              size="small"
              color="#00c1cd"
            />
          )}
          <Image
            source={{uri: item.strMealThumb}}
            style={styles.mealImage}
            onLoad={() => handleImageLoad(item.idMeal)}
          />
        </View>
        <Text style={styles.mealName} numberOfLines={2}>
          {item.strMeal}
        </Text>
        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.timeTitle}>Time</Text>
            <Text style={styles.timeValue}>10 mins</Text>
          </View>
          <View style={styles.bookmarkContainer}>
            <TouchableOpacity
              style={[styles.bookmarkBtn]}
              onPress={() => handleLikePress(item)}>
              <Bookmark color={isSaved(item.idMeal) ? '#00c1cd' : '#C1C1C1'} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [
      loadingImages,
      isSaved,
      handleImageLoad,
      handleLikePress,
      navigation,
      dispatch,
    ],
  );

  const memoizedCategoryItemList = useMemo(
    () => (
      <FlatList
        horizontal
        data={meals}
        keyExtractor={item => item.idMeal}
        renderItem={renderCategoryItems}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
        contentContainerStyle={styles.categoryItemContainer}
      />
    ),
    [meals, renderCategoryItems],
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.scrollviewContainer}
        contentContainerStyle={{paddingBottom: insets.bottom + 16}}>
        {renderGreeting()}
        {renderSearchBar()}
        {renderTrendingNow()}
        {renderPopularCategory()}
        {selectedCategory && memoizedCategoryItemList}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
