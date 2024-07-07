import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Styles';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Notifications</Text>
        </View>

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No new notifications.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
