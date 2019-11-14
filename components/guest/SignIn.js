import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import SignInForm from './Form/SignInForm';


export default class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Sign In',
    };
    render() {
    const { navigation } = this.props;
    return (
      <View style={ styles.container}>
        <SignInForm />
        <Button 
        title='Go to Sign Up'
        onPress={() => {
            navigation.navigate('SignUp')
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        paddingHorizontal: 16,
    }
})