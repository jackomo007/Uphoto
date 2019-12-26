import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

class ManyComments extends React.Component {

  render() {
    const { navigation, item, authors_comments } = this.props;
    let name ="";
    let comment ="";
    let photo ="";
    
    authors_comments.forEach(author => {
      if(item[0] === author[0]){
        name =    author[1].name;
        comment=  item[1];
        photo=    author[1].photoURL;
      }
    });

    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Image
        source={{ uri: photo }}
        style={{ width: 24, height: 24, borderRadius: 12, marginRight:1 }}
      />
      <Text style={{ fontWeight: "bold" }}>{name}:</Text><Text> {comment}</Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default ManyComments;