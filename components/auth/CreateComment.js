import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

class CreateComment extends React.Component {
  render() {
    return (
      <View>
        <Ionicons style={{ marginLeft: 10, }} name="ios-chatbubbles" size={30} color="#2196f3" 
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: "11111111111111111",
              otherParam: 'it works!',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:{' '}
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: "222222222222222222222",
            })
          }
        />
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:{' '}
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: "333333333333333333",
            })
          }
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: CreateComment,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);