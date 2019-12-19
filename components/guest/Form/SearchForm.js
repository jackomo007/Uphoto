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
            autoCapitalize='none'
            onBlur={props.input.onBlur}
            />
            <View style={styles.linea} />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const validate = (values,props) => {
    const errors = {};

    if(!values.name){
        errors.name = 'required';
    }else if (values.name.length < 5){
        errors.name = 'must be at least 5 characters';
    }else if (values.name.length > 10){
        errors.name = 'must be less than 10 characters';
    }
    
    return errors;
}

const SearchForm = (props) => {
    return(
        <View style={styles.container}>
            <Field name="name" component={fieldName} ph='Are you looking for...?' />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textInput: {
        marginBottom: 16,
        // width:100,
    },
    linea: {
        backgroundColor: '#2196f3',
        height: 2,
    },
    errors: {
        color: '#bf405f',
    }
});

export default reduxForm({ form: 'SearchForm', validate})(SearchForm);