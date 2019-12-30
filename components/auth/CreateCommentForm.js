import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldName = (props) => {
    return (
        <View>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.name === 'text' ? props.input.value : props.publication_id}
                keyboardType="default"
                autoCapitalize='none'
                onBlur={props.input.onBlur}
                multiline
                style={props.input.name === 'text' ? styles.textInput : styles.textInputHidden}
            />
            <View style={styles.linea} />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    );
};

const validate = (values, props) => {
    const errors = {};

    if (values.publication_id && values.publication_id.length < 1) {
        errors.publication_id = 'something is wrong';
    }

    if (values.text && values.text.length > 140) {
        errors.text = 'must be less than 140 characters';
    }

    return errors;
}

const CreateCommentForm = (props) => {
    return (
        <View style={styles.container}>
            <Field name="publication_id" publication_id={props.publication_id} component={fieldName} />
            <Field name="text" component={fieldName} ph='What do you think about this photo?' />
            <Button
                title="Comment"
                onPress={props.handleSubmit(
                    props.register,
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    textInput: {
        marginBottom: 16,
    },
    textInputHidden: {
        color: 'white',
    },
    errors: {
        color: '#bf405f',
    }
});

export default reduxForm({ form: 'CreateCommentForm', validate })(CreateCommentForm);