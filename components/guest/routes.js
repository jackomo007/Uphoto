import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';

const RoutesGuest = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
    },
    SignUp: {
        screen: SignUpScreen,
    },
});

export default createAppContainer(RoutesGuest);