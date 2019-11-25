import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import {actionLogin} from '../../store/Actions';
import SignInForm from './Form/SignInForm';

class SignIn extends React.Component {
    singInUser = (values) => {
      this.props.login(values)
    };
    static navigationOptions = {
        title: 'Sign In',
    };
    render() {
    const { navigation } = this.props;
    return (
      <View style={ styles.container}>
        <SignInForm login={this.singInUser}/>
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
});

const mapStateToProps = (state) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (datos) => {
      dispatch(actionLogin(datos));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)