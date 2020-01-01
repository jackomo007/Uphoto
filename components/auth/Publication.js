import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class Publication extends React.Component {

  render() {
    const { item, authors_comments, author, authors, user, profile, comments } = this.props;
    const { navigate } = this.props.navigation;
    let { key } = item;
    let comentarios = [];
    let comment_count = 0;
    let likes_count = 0;
    if (Array.isArray(comments) && comments.length && Array.isArray(authors_comments) && authors_comments.length) {
      comments.forEach(element => {
        if (element[0][2] === key) {
          comentarios.push(element);
        }
      });
    }
    if (Array.isArray(comentarios) && comentarios.length) {
      comment_count = comentarios[0].length;
    }

    if (profile === false) {
      const { width } = Dimensions.get('window');
      const factor = item.width / width;
      const height = item.height / factor;
      return (
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigate('PublicationProfile', { user: author, authors:authors })}>
              <Image
                source={{ uri: author.photoURL }}
                style={{ width: 48, height: 48, borderRadius: 24 }}
              />
            </TouchableOpacity>
            <Text
              style={{ marginTop: 10, marginLeft: 5, }}
              onPress={() => navigate('PublicationProfile', { user: author })}
            >{author.name}</Text>
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
              <Text style={styles.count}>{likes_count > 0 ? likes_count : ""}</Text>
              <Ionicons style={{ marginLeft: 10, }} name="ios-chatbubbles" size={30} color="#2196f3"
                onPress={() => navigate('CreateComment', { publication_id: key, comentarios: comentarios, authors_comments: authors_comments })} />
              <Text style={styles.count}>{comment_count > 0 ? comment_count : ""}</Text>
            </View>
          </View>
        </View>
      );
    } else {
      if (author.email === user) {
        const factor = Dimensions.get('window');
        const width = factor.width / 3;
        const height = factor.width / 3;
        const factor_width = factor.width;
        const factor_height = factor.height / 2;
        return (
          <View>
            <TouchableOpacity onPress={() => navigate('BigPicture', { uri: item.secure_url, height: factor_height, width: factor_width, texto: item.text })}>
              <Image
                source={{ uri: item.secure_url }}
                style={{ width, height }}
              />
            </TouchableOpacity>
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
  count: {
    paddingRight: 3,
    paddingLeft: 3,
  },
  text: {
    paddingHorizontal: 10,
    fontStyle: 'italic',
    marginBottom: 10,
  },
});

export default Publication;