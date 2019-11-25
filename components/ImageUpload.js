import * as React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ExpoConstants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const ImageUpload = (props) =>{
  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
    
      console.log(result);
    
      if (!result.cancelled) {
        props.load(result);
      }
    };
  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        {
          props.image ?
          <Image source={{  uri: props.image.uri }} 
        style={{ width: 160, height: 160, borderRadius: 80 }}/> :
        <Image source={require('../assets/image.png')} 
        style={{ width: 160, height: 160, borderRadius: 80 }}/>
        }
        
      </TouchableOpacity>
    </View>
  );
};

export default ImageUpload;