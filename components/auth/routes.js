import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Home';
import AddScreen from './Add';
import ProfileScreen from './Profile';
import AuthorScreen from './Profile';
import SearchScreen from './Search';
import PublicationScreen from './Publication';
import CommentsScreen from './Comments';
import TabFollow from './TabFollow';

const StackHome = createStackNavigator({
  Home: { 
    screen:HomeScreen,
  },
  Author: {
      screen:AuthorScreen,
  },
  Publication:{
      screen:PublicationScreen,
  },
  Comments: {
      screen: CommentsScreen,
  }
});

StackHome.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let sizeNavigation = navigation.state.routes.length;
  if (navigation.state.index > 0 && navigation.state.routes[sizeNavigation - 1].routeName === "Comments") {
    tabBarVisible = false;
  }else{
    tabBarVisible = true;
  }
  return {
    tabBarVisible,
  };
};

const StackSearch = createStackNavigator({
  Search: { 
    screen:SearchScreen,
  },
  Publication:{
      screen:PublicationScreen,
  },
  Author: {
      screen:AuthorScreen,
  },
  Comments: {
      screen:CommentsScreen,
  }
});

StackSearch.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let sizeNavigation = navigation.state.routes.length;
  if (navigation.state.index > 0 && navigation.state.routes[sizeNavigation - 1].routeName === "Comments") {
    tabBarVisible = false;
  }else{
    tabBarVisible = true;
  }
  return {
    tabBarVisible,
  };
};

const StackFollow = createStackNavigator({
  TabFollow: { 
    screen:TabFollow,
    navigationOptions:{
      header:null
    }
  },
  Author: {
      screen:AuthorScreen,
  },
  Publication:{
    screen:PublicationScreen,
  },
  Comments: {
    screen:CommentsScreen,
  }
});

StackFollow.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let sizeNavigation = navigation.state.routes.length;
  if (navigation.state.index > 0 && navigation.state.routes[sizeNavigation - 1].routeName === "Comments") {
    tabBarVisible = false;
  }else{
    tabBarVisible = true;
  }
  return {
    tabBarVisible,
  };
};

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: StackHome },
    Add: { screen: AddScreen },
    Follow: { screen: StackFollow },
    Profile: { screen: ProfileScreen },
    Search: { screen: StackSearch },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : ''}`;
        } else if (routeName === 'Add') {
          iconName = `ios-add-circle-outline${focused ? '' : ''}`;
        } else if (routeName === 'Follow') {
          iconName = `ios-person-add${focused ? '' : ''}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : ''}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : ''}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2196f3',
      inactiveTintColor: 'gray',
    },
  }
));