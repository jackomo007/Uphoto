import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import ManyComments from './ManyComments';

class Comments extends React.Component {

  render() {
    const { navigation, item, authors_comments } = this.props;
    let name = "";
    let comment = "";
    let photo = "";
    if (Array.isArray(item) && item.length && Array.isArray(authors_comments) && authors_comments.length) {
      if (item.length > 1) {
        let comentarios = item;
        return (
          <View style={styles.container}>
            <FlatList
              data={comentarios}
              renderItem={({ item }) => <ManyComments item={item} authors_comments={authors_comments} />}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => (
                <View style={styles.separator} />
              )}
            />
          </View>
        );
      } else {
        authors_comments.forEach(author => {
          if (item[0][0] === author[0]) {
            name = author[1].name;
            comment = item[0][1];
            photo = author[1].photoURL;
          }
        });

        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                source={{ uri: photo }}
                style={{ width: 24, height: 24, borderRadius: 12, marginRight: 1 }}
              />
              <Text style={{ fontWeight: "bold" }}>{name}:</Text><Text> {comment}</Text>
            </View>
          </View>
        );
      }

    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default Comments;