import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../navigation/MainNavigation';
import Button from '../../components/Button';
import DetailTile from '../../components/DetailTile';
import {addNewRecipe} from '../../store/reducers/mealSlice';
import {AppDispatch} from '../../store/store';
import {responsiveHeight} from '../../utils/responsive';
import {storeData} from '../../utils/asyncStorage';
import BackArrow from '../../assets/svgs/BackArrow';
import EditPen from '../../assets/svgs/EditPen';
import MenuDots from '../../assets/svgs/MenuDots';
import Delete from '../../assets/svgs/Delete';
import AddNew from '../../assets/svgs/AddNew';
import {Ingredients} from '../../types';
import styles from './Styles';

const CreateRecipeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState<Ingredients[]>([
    {name: '', measure: ''},
  ]);
  const [image, setImage] = useState<string | undefined>('');
  const [servesNo, setServesNo] = useState('');
  const [cookTime, setCookTime] = useState('');

  const addIngredient = () => {
    setIngredients([...ingredients, {name: '', measure: ''}]);
  };

  const updateIngredient = (
    index: number,
    field: keyof Ingredients,
    value: string,
  ) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const removeIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const saveRecipe = async () => {
    if (
      !image ||
      ingredients.length === 0 ||
      !recipeName ||
      !servesNo ||
      !cookTime
    ) {
      Alert.alert('Please fill all the fields and an image');
      return;
    }

    try {
      const imageKey = `recipe_image_${Date.now()}`;
      await storeData(imageKey, image);

      const newRecipe: any = {
        idMeal: Date.now().toString(),
        strMeal: recipeName,
        strMealThumb: image,
        newRecipe: true,
        servesNo,
        cookTime,
      };

      ingredients.forEach((ingredient, index) => {
        newRecipe[`strIngredient${index + 1}`] = ingredient.name;
        newRecipe[`strMeasure${index + 1}`] = ingredient.measure;
      });

      dispatch(addNewRecipe(newRecipe));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving recipe:', error);
      Alert.alert('Failed to save recipe. Please try again.');
    }
  };

  const pickImage = useCallback(() => {
    launchImageLibrary(
      {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
        }
      },
    );
  }, []);

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
      <Text style={styles.title}>Create Recipes</Text>
    </View>
  );

  const renderImageHolder = () => (
    <View style={[styles.imageHolderContainer, !image && styles.bg]}>
      {image ? (
        <Image source={{uri: image}} style={styles.image} />
      ) : (
        <Image
          source={require('../../assets/images/placeholderImage.png')}
          style={styles.placeholderImg}
        />
      )}
      <TouchableOpacity style={[styles.editBtn]} onPress={pickImage}>
        <EditPen />
      </TouchableOpacity>
    </View>
  );

  const renderRecipeInput = () => (
    <TextInput
      style={styles.input}
      value={recipeName}
      onChangeText={setRecipeName}
      placeholder="Enter recipe name"
    />
  );

  const renderServes = () => (
    <DetailTile type="serves" value={servesNo} onChangeText={setServesNo} />
  );

  const renderTime = () => (
    <DetailTile type="time" value={cookTime} onChangeText={setCookTime} />
  );

  const renderIngredients = () => (
    <>
      <View style={styles.ingredientsTitleWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
      </View>
      {ingredients.map((ingredient, index) => {
        return (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              placeholder="Item name"
              value={ingredient.name}
              onChangeText={value => updateIngredient(index, 'name', value)}
              style={styles.itemInput}
            />
            <TextInput
              placeholder="Quantity"
              value={ingredient.measure}
              onChangeText={value => updateIngredient(index, 'measure', value)}
              style={styles.quantity}
              textAlign="center"
            />
            <TouchableOpacity
              disabled={ingredients.length === 1}
              style={styles.deleteBtnContainer}
              onPress={() => removeIngredient(index)}>
              <Delete />
            </TouchableOpacity>
          </View>
        );
      })}
      <View>
        <TouchableOpacity style={styles.addnewBtn} onPress={addIngredient}>
          <AddNew />
          <Text style={styles.addNew}>Add new Ingredient</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === 'ios'}
        keyboardShouldPersistTaps="handled">
        {renderHeader()}
        {renderTitle()}
        {renderImageHolder()}
        {renderRecipeInput()}
        {renderServes()}
        {renderTime()}
        {renderIngredients()}
      </KeyboardAwareScrollView>
      <View style={[styles.footerContainer, {paddingBottom: insets.bottom}]}>
        <Button
          type="primary"
          title="Save my recipe"
          height={responsiveHeight(6.2)}
          onPress={saveRecipe}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateRecipeScreen;
