import React from 'react';
import { View, StyleSheet, Text,  Button } from 'react-native';

class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Home!</Text>
        <Button 
        title='Author'
        onPress={()=>{navigation.navigate('Author')}}
        />
        <Button 
        title='Comments'
        onPress={()=>{navigation.navigate('Comments')}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  }
});

export default Home;