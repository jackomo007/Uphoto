import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import FollowScreen from './Follow';


export default createAppContainer(createMaterialTopTabNavigator(
  {
    Follow: { screen: FollowScreen },
    Followers: { screen: FollowScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Follow') {
          iconName = `ios-person-add${focused ? '' : ''}`;
        } else if (routeName === 'Followers') {
          iconName = `ios-people${focused ? '' : ''}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
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