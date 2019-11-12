import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Add extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
         <Text style={{color: 'white'}}>Add!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#283593',
  }
});

export default Add;