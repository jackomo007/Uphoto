import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './Form/SignUpForm';

class SignUp extends React.Component {

    registerUser = (values) => {
        console.log(values);
        this.props.register(values);
    };

    static navigationOptions = {
        title: 'Sign Up',
    };
    render() {
    console.log(this.props.numero)
    const { navigation } = this.props;
    return (
      <View style={ styles.container}>
        <SignUpForm register={this.registerUser}/>
        <Button 
        title='SignIn'
        onPress={() => {
            navigation.goBack();
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

const mapStateToProps = (state) => ({
        numero: state.reducerPrueba
});

const mapDispatchToProps = (dispatch) => ({
    register: (values) => {
        dispatch({type: 'REGISTER', datos: values}); 
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)