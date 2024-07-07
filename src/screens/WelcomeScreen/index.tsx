import React, {useState} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import styles from './Styles';
import Button from '../../components/Button';
import InputModal from '../../components/InputModal';
import {responsiveHeight, responsiveWidth} from '../../utils/responsive';
import {RootStackParamList} from '../../navigation/MainNavigation';

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showModal, setShowModal] = useState(false);
  const insets = useSafeAreaInsets();

  const renderMainContent = () => (
    <View style={[styles.content, {paddingBottom: insets.bottom}]}>
      <Text style={styles.title}>Yumm</Text>
      <Text style={styles.subTitle}>Find the best receipies for cooking</Text>

      <Button
        type="primary"
        title="Sign up"
        onPress={() => setShowModal(true)}
        width={responsiveWidth(55)}
        height={responsiveHeight(8)}
      />
      <Button
        type="secondary"
        title="Start cooking"
        onPress={() => navigation.navigate('Landing')}
        width={responsiveWidth(55)}
        height={responsiveHeight(8)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover">
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']}
          locations={[0, 0.4, 0.7]}
          style={styles.gradient}
        />
        {renderMainContent()}
        <InputModal isVisible={showModal} onClose={() => setShowModal(false)} />
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
