import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Button from '../Button';
import {responsiveWidth} from '../../utils/responsive';
import {storeData} from '../../utils/asyncStorage';
import styles from './Styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/MainNavigation';
import {useDispatch} from 'react-redux';
import {selectFullname} from '../../store/reducers/authSlice';
import {AppDispatch} from '../../store/store';

interface InputModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const InputModal: React.FC<InputModalProps> = ({isVisible, onClose}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (fullName.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both fullname and password');
      return;
    }

    try {
      await storeData('@authenticated', {isAuthenticated: true});
      dispatch(selectFullname(fullName));
      navigation.navigate('Landing');
      onClose();
    } catch (error) {
      console.error('Error saving user data:', error);
      Alert.alert('Error', 'Failed to save user data');
    }
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      animationType="fade">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Sign up</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.btnsContainer}>
              <Button
                type="secondary"
                title="Cancel"
                onPress={onClose}
                width={responsiveWidth(30)}
                style={styles.cancelBtn}
              />
              <Button
                type="primary"
                title="Sign up"
                onPress={handleLogin}
                width={responsiveWidth(30)}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default InputModal;
