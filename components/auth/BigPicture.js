import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class BigPicture extends React.Component {
  render() {
    const { navigation } = this.props;
    let uri = navigation.getParam('uri');
    let width = navigation.getParam('width');
    let height = navigation.getParam('height');
    let texto = navigation.getParam('texto');
    return (
      <View style={{ flex: 3 }}>
        <View style={{
          flexDirection: 'row',
          // justifyContent: 'space-around',
          marginBottom: 10,
          marginTop: 5,
          marginLeft: 20,
          flex: 1,
        }}>
          <Ionicons style={{ alignSelf: 'flex-start', marginRight: 5 }} onPress={() => { navigation.goBack() }} name="ios-arrow-back" size={30} color="#2196f3" />
        </View>
        <View style={styles.image}>
          <Image
            source={{ uri: uri }}
            style={{ width, height }}
          />
          <View>
            <Text style={styles.text}>{texto}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#283593',
  },
  text: {
    color: 'white',
  }
});
export default BigPicture;