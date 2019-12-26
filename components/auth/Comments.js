import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class Comments extends React.Component {

  render() {
    const { navigation, item, comments } = this.props;
    return (
      <View style={styles.container}>
        {/* <Text style={{ fontWeight: "bold" }}>{comment_author_name} </Text><Text> {comment}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default Comments;