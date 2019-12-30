import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class BigPicture extends React.Component {
  render() {
    const { navigation } = this.props;
    let uri = navigation.getParam('uri');
    let width = navigation.getParam('width');
    let height = navigation.getParam('height');
    let texto = navigation.getParam('texto');
    return (
      <View style={ styles.image }>
        <Image
          source={{ uri: uri }}
          style={{ width, height }}
        />
        <View>
          <Text style={styles.text}>{texto}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#283593',
  },
  text:{
    color:'white',
  }
});
export default BigPicture;