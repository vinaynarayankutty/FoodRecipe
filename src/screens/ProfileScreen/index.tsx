import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Styles';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>My Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
