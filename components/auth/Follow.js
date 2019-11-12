import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class Follow extends React.Component {
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
         <Text style={{color: 'white'}}>Follow!</Text>
         <Button 
        title='Author'
        onPress={()=>{navigation.navigate('Author')}}
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
    backgroundColor: '#283593',
  }
});

export default Follow;