import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class Profile extends React.Component {
  render() {
  const { navigation } = this.props;
    return (
      <View style={styles.container}>
         <Text style={{color: 'white'}}>Profile!</Text>
         <Button 
         title='Publicaction'
         onPress={()=>{navigation.navigate('Publication')}}
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

export default Profile;