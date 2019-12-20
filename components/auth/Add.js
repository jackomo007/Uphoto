import React from 'react';
import { View, StyleSheet, Text, Button,ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Add extends React.Component {
  render() {
    const { navigation } = this.props;
    const img = "https://res.cloudinary.com/dvm6sgg1h/image/upload/v1576845497/jsqehywsp3ykewvol2dj.jpg";
    return (
      <View style = { styles.container } >
      <ImageBackground  style= { styles.backgroundImage } source={{ uri: img }}>
      <View style= { styles.logoContainer }>
        <Text style = { styles.logoDescription }>
          Pick Uphoto!
        </Text>
        <Ionicons styles={styles.icon} onPress={()=>{navigation.navigate('Selection')}} name="ios-aperture" size={100} color="#2196f3" />       
      </View>
      </ImageBackground>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: "center",
  },
  logoContainer:{
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  },
  logoDescription:{
    fontSize: 35,
    fontWeight: '600',
    color: 'white'
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 1
},
});

export default Add;