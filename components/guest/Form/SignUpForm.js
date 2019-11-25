import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Field, reduxForm} from 'redux-form';

const fieldName = (props) => {
    return (
        <View style={styles.textInput}>
            <TextInput 
            placeholder={props.ph}
            onChangeText={props.input.onChange} 
            value={props.input.value}
            keyboardType={props.input.name === 'email'? 'email-address': 'default'}
            autoCapitalize='none'
            secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirm_password')}
            onBlur={props.input.onBlur}
            />
            <View style={styles.linea} />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const validate = (values) => {
    const errors = {};

    if(!values.name){
        errors.name = 'required';
    }else if (values.name.length < 5){
        errors.name = 'must be at least 5 characters';
    }else if (values.name.length > 10){
        errors.name = 'must be less than 10 characters';
    }

    if(!values.email){
        errors.email = 'required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'wrong format email'
    }

    if(!values.password){
        errors.password = 'required';
    } else if(values.password.length < 5){
        errors.password = 'must be at least 5 characters';
    } else if(values.password.length > 15){
        errors.password = 'must be less than 15 characters';
    }

    if(!values.confirm_password){
        errors.confirm_password = 'required';
    } else if(values.password !== values.confirm_password){
        errors.confirm_password = 'failed password confirmation';
    }

    return errors;
}

const SignUpForm = (props) => {
    return(
        <View style={styles.container}>
            <Field name="name" component={fieldName} ph='Name' />
            <Field name="email" component={fieldName} ph='Email' />
            <Field name="password" component={fieldName} ph='******' />
            <Field name="confirm_password" component={fieldName} ph='******' />
            <Button 
            title="Register"
            onPress={props.handleSubmit(
                props.register,
            )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 2,
    },
    textInput: {
        marginBottom: 16,
    },
    linea: {
        backgroundColor: '#2196f3',
        height: 2,
    },
    errors: {
        color: '#bf405f',
    }
});

export default reduxForm({ form: 'SignUpForm', validate})(SignUpForm);