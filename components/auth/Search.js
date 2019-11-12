import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


class Search extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
         <Text style={{color: 'white'}}>Search!</Text>
         <Button 
        title='Publication'
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

export default Search;