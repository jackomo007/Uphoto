import React from 'react';
import { View, StyleSheet, Text, Button, Image, Dimensions, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Publication extends React.Component {
  
  render() {
    
    const { navigation, item, author } = this.props;
    const {width} = Dimensions.get('window');
    const factor = item.width / width;
    const height = item.height / factor;
    return (
      <View>
        <View style={styles.header}>
          <Image
            source={{ uri: author.photoURL }} 
            style={{ width: 48, height: 48, borderRadius: 24 }}
          />
          <Text style={{ marginTop:10, marginLeft:5, }}>{author.name}</Text>
        </View>
        <Image 
          source={{ uri: item.secure_url }}
          style={{ width, height }}
        />
        <View style={styles.footer}>
        <View style={styles.icons}>
          <Ionicons name="ios-heart-empty" size={30} color="#2196f3" />
          <Ionicons style={{ marginLeft:10, }} name="ios-chatbubbles" size={30} color="#2196f3" />
        </View>
        <View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
          <Text style={{ paddingHorizontal: 10, }}>Comments</Text>
        </View>
         {/* <Text style={{color: 'white'}}>Publication!</Text>
         <Button 
         title='Comments'
         onPress={()=>{navigation.navigate('Comments')}}
         /> */}
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

export default Publication;