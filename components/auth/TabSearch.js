import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './Search';
import UsersScreen from './SearchUsers';


export default createAppContainer(createMaterialTopTabNavigator(
  {
    Search: { screen: SearchScreen },
    SearchUsers: { screen: UsersScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Search') {
          iconName = `ios-images${focused ? '' : ''}`;
        } else if (routeName === 'SearchUsers') {
          iconName = `ios-person${focused ? '' : ''}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2196f3',
      inactiveTintColor: 'gray',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'white',
      },
    },
  }
));