import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class Comments extends React.Component {
  
  render() {
    const { navigation, item, comment_user } = this.props;
    var author = "";
    var comment = "";
    if(comment_user[0] != undefined){
      author = comment_user[0][0];
      comment = comment_user[0][1];
    }
    return (
      <View style={styles.container}>
        <Text>{author}</Text>
        <Text>{ comment }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
  }
});

export default Comments;