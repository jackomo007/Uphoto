import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class Add extends React.Component {
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
         <Button 
        title='Select Photo'
        onPress={()=>{navigation.navigate('Selection')}}
        />
         <Text style={{color: 'white'}}></Text>
         <Button 
        title='Take a Photo'
        onPress={()=>{navigation.navigate('Selection')}}
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
    backgroundColor: '#43CBFF',
  }
});

export default Add;