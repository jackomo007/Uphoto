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
                keyboardType="default"
                autoCapitalize='none'
                onBlur={props.input.onBlur}
                multiline 
            />
            <View style={styles.linea} />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const fieldImage = props => <View>
    <View>
        {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
</View>;

const validate = (values,props) => {
    const errors = {};
    if(!props.image){
        errors.image = 'image required';
    }

    if(values.text && values.text.length > 140){
        errors.text = 'must be less than 140 characters';
    }

    return errors;
}

const PickFromGalleryForm = (props) => {
    return(
        <View style={styles.container}>
            <Field name="image" component={fieldImage} />
            <Field name="text" component={fieldName} ph='Write here the description of your Photo!' />
            <Button 
            title="Publish"
            onPress={props.handleSubmit(
                props.register,
            )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 16,
    },
    textInput: {
        marginBottom: 16,
    },
    errors: {
        color: '#bf405f',
    }
});

export default reduxForm({ form: 'PickFromGalleryForm', validate})(PickFromGalleryForm);