import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {connect} from 'react-redux';
import {blur} from 'redux-form';
import {actionRegister, actionLoadImageSignUp, actionCleanImageSignUp} from '../../store/Actions';
import SignUpForm from './Form/SignUpForm';
import ImageUpload from '../ImageUpload';

class SignUp extends React.Component {
    componentWillMount() {
        this.props.cleanImage();
    }
    registerUser = (values) => {
        this.props.register(values);
    };

    static navigationOptions = {
        title: 'Sign Up',
    };
    render() {
    const { navigation } = this.props;
    return (
      <View style={ styles.container}>
        <ImageUpload image={this.props.image.image} load={this.props.loadImage} />
        <SignUpForm register={this.registerUser} image={this.props.image.image}/>
        {/* <Button 
        title='SignIn'
        onPress={() => {
            navigation.goBack();
        }}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
    container: {
        marginTop:10, 
        flex: 1, 
        justifyContent: 'center',
        paddingHorizontal: 16,
    }
})

const mapStateToProps = (state) => ({
        numero: state.reducerPrueba,
        image: state.reducerImageSingUp,
});

const mapDispatchToProps = dispatch => ({
    register: (values) => {
        dispatch(actionRegister(values)); 
    },
    loadImage: (image) => {
        dispatch(actionLoadImageSignUp(image)); 
        dispatch(blur('SignUpForm','image',Date.now()));
    },
    cleanImage: () => {
        dispatch(actionCleanImageSignUp()); 
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)