import React from 'react';
import {CurvedBottomBarExpo} from 'react-native-curved-bottom-bar';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import HomeScreen from '../screens/HomeScreen';
import SavedRecipeScreen from '../screens/SavedRecipeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
}

const TabNavigation = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'home':
        icon = 'home';
        break;
      case 'savedRecipe':
        icon = 'bookmark';
        break;
      case 'notifications':
        icon = 'bell';
        break;
      case 'profile':
        icon = 'person';
        break;
    }

    return (
      <Octicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? '#00C1CD' : 'gray'}
      />
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}: TabBarProps) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={70}
      circleWidth={60}
      bgColor="white"
      initialRouteName="home"
      borderTopLeftRight
      screenOptions={{headerShown: false}}
      renderCircle={({navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('CreateRecipe')}>
            <Octicons name={'plus'} color="white" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBarExpo.Screen
        name="home"
        position="LEFT"
        component={HomeScreen}
      />
      <CurvedBottomBarExpo.Screen
        name="savedRecipe"
        component={SavedRecipeScreen}
        position="LEFT"
      />
      <CurvedBottomBarExpo.Screen
        name="notifications"
        component={NotificationScreen}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="profile"
        component={ProfileScreen}
        position="RIGHT"
      />
    </CurvedBottomBarExpo.Navigator>
  );
};

export default TabNavigation;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c1cd',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
