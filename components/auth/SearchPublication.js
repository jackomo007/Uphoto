import React from 'react';
import { View, StyleSheet, Text, Button, Image, Dimensions } from 'react-native';

class SearchPublication extends React.Component {
  
  render() {
    
    const { navigation, item, author, user, profile } = this.props;
    const factor =Dimensions.get('window');
    const width = factor.width /3;
    const height = factor.width /3;
    return (
    <View>
    <Image 
        source={{ uri: item.secure_url }}
        style={{ width, height }}
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
    // backgroundColor: '#283593',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop:5,
    marginLeft:15,
  },
  footer: {
    marginHorizontal:16,
  },
  icons :{
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical:10,
  },
  text:{
    paddingHorizontal: 10, 
    fontStyle: 'italic', 
    marginBottom:10,
  },
});

export default SearchPublication;