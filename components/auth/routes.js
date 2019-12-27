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
import PickFromGalleryScreen from './PickFromGallery';
import SliderScreen from './Slider';
import CreateCommentScreen from './CreateComment';


const StackHome = createStackNavigator({
  Home: { 
    screen:HomeScreen,
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
      screen: CommentsScreen,
  },
  CreateComment: {
    screen: CreateCommentScreen,
  }
});

StackHome.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let sizeNavigation = navigation.state.routes.length;
  if (navigation.state.index > 0 && (navigation.state.routes[sizeNavigation - 1].routeName === "Comments" || navigation.state.routes[sizeNavigation - 1].routeName === "Selection" || navigation.state.routes[sizeNavigation - 1].routeName === "Slider")) {
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
    navigationOptions:{
      header:null
    }
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
  if (navigation.state.index > 0 && (navigation.state.routes[sizeNavigation - 1].routeName === "Comments" || navigation.state.routes[sizeNavigation - 1].routeName === "Selection" || navigation.state.routes[sizeNavigation - 1].routeName === "Slider")) {
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
  if (navigation.state.index > 0 && (navigation.state.routes[sizeNavigation - 1].routeName === "Comments" || navigation.state.routes[sizeNavigation - 1].routeName === "Selection" || navigation.state.routes[sizeNavigation - 1].routeName === "Slider")) {
    tabBarVisible = false;
  }else{
    tabBarVisible = true;
  }
  return {
    tabBarVisible,
  };
};

const StackAdd = createStackNavigator({
  Add: { 
    screen:AddScreen,
    navigationOptions:{
      header:null
    }
  },
  Selection: {
      screen:PickFromGalleryScreen,
  }
});

StackAdd.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let sizeNavigation = navigation.state.routes.length;
  if (navigation.state.index > 0 && (navigation.state.routes[sizeNavigation - 1].routeName === "Comments" || navigation.state.routes[sizeNavigation - 1].routeName === "Selection" || navigation.state.routes[sizeNavigation - 1].routeName === "Slider")) {
    tabBarVisible = false;
  }else{
    tabBarVisible = true;
  }
  return {
    tabBarVisible,
  };
};

const StackProfile = createStackNavigator({
  Add: { 
    screen:ProfileScreen,
    navigationOptions:{
      header:null
    }
  },
  Slider: {
      screen:SliderScreen,
  }
});

StackProfile.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let sizeNavigation = navigation.state.routes.length;
  if (navigation.state.index > 0 && (navigation.state.routes[sizeNavigation - 1].routeName === "Comments" || navigation.state.routes[sizeNavigation - 1].routeName === "Selection" || navigation.state.routes[sizeNavigation - 1].routeName === "Slider")) {
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
    Add: { screen: StackAdd },
    // Follow: { screen: StackFollow },
    Profile: { screen: StackProfile },
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
          iconName = `ios-camera${focused ? '' : ''}`;
        } else if (routeName === 'Follow') {
          iconName = `ios-person-add${focused ? '' : ''}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : ''}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : ''}`;
        }

        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#2196f3',
      inactiveTintColor: '#B2CFED',
    },
  }
));