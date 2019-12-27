import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class CreateComment extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
       <Text>
          PUBLICATION ID: {JSON.stringify(navigation.getParam('publication_id'))}
        </Text>
      </View>
    );
  }
}


export default CreateComment;