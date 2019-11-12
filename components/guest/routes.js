import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Button, Text } from 'react-native';

class SignIn extends React.Component {
    static navigationOptions = {
      title: 'Sign In',
    };
  
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1,justifyContent: 'center' }}>
                <Text>Sign In</Text>
                <Button 
                title='Go to Sign Up'
                onPress={() => {
                    navigation.navigate('SignUp')
                }}/>
            </View>
        );
    }
}

class SignUp extends React.Component {
    static navigationOptions = {
      title: 'Sign Up',
    };
  
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>Sign Up</Text>
                <Button 
                title='Go back'
                onPress={() => {
                    navigation.goBack();
                }}/>
            </View>
        );
    }
}

const RoutesG = createStackNavigator(
    {
        SignIn: SignIn,
        SignUp: SignUp,
    },
    {
        initialRouteName: 'SignIn',
    }
);

const RoutesGuest = createAppContainer(RoutesG);

export {RoutesGuest}; 