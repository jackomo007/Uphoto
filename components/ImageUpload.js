import * as React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = (props) =>{
  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
    
      if (!result.cancelled) {
        props.load(result);
      }
    };
    console.log(props.radius);
    const radius = {borderRadius: props.radius?0:100};
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        {
          props.image ?
          <Image source={{  uri: props.image.uri }} 
        style={{ width: 200, height: 200, ...radius }}/> :
        <Image source={require('../assets/image.png')} 
        style={{ width: 200, height: 200, ...radius }}/>
        }
        
      </TouchableOpacity>
    </View>
  );
};

export default ImageUpload;