import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Comments from './Comments';


class Publication extends React.Component {

  render() {
    const { navigation, item, authors_comments, author, user, profile, comments } = this.props;
    console.log(authors_comments);
    let comentarios = [];
    let { key } = item;
    var coments = comments[0];
    let control = 0;
    if (Array.isArray(coments) && coments.length) {
      coments.forEach(comentario => {
        // authors_comments.forEach(element => {
        //   if (key === comentario[2]) {
        //     if (comentario[0] === element[0]) {
        //       // ESTA REPITIENDO ESTA LINEA POR CADA PUBLICACION
        //       var line = [comentario[2], comentario[1], element[1].name, element[1].photoURL];
        //       var confirm = comentarios.includes(line);
        //       if (confirm === false) {
        //         comentarios[control] = line;
        //         control++;
        //       }
        //     }
        //   }
        // });
      });
    }

    if (profile === false) {
      const { width } = Dimensions.get('window');
      const factor = item.width / width;
      const height = item.height / factor;
      return (
        <View>
          <View style={styles.header}>
            <Image
              source={{ uri: author.photoURL }}
              style={{ width: 48, height: 48, borderRadius: 24 }}
            />
            <Text style={{ marginTop: 10, marginLeft: 5, }}>{author.name}</Text>
          </View>
          <Image
            source={{ uri: item.secure_url }}
            style={{ width, height }}
          />
          <View style={styles.footer}>
            <View>
              <Text style={styles.text}>{item.text}</Text>
            </View>
            <View style={styles.icons}>
              <Ionicons name="ios-heart-empty" size={30} color="#2196f3" />
              <Ionicons style={{ marginLeft: 10, }} name="ios-chatbubbles" size={30} color="#2196f3" />
            </View>
            {/* <Comments item={item} comments={comentarios} /> */}
          </View>
        </View>
      );
    } else {
      if (author.email === user) {
        const factor = Dimensions.get('window');
        const width = factor.width / 3;
        const height = factor.width / 3;
        return (
          <View>
            <Image
              source={{ uri: item.secure_url }}
              style={{ width, height }}
            />
          </View>
        );
      } else {
        return null;
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#283593',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 15,
  },
  footer: {
    marginHorizontal: 16,
  },
  icons: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    paddingHorizontal: 10,
    fontStyle: 'italic',
    marginBottom: 10,
  },
});

export default Publication;