import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { actionDownloadPublication } from '../../store/Actions';
import Publication from './Publication';

class PublicationProfile extends React.Component {
  render() {
    let name = "";
    let email = "";
    let photo = "";
    const { navigation, authors, publications, comments, author_comments } = this.props;
    let user = navigation.getParam('user');
    authors.forEach(autor => {
      if (autor[1].email === user.email) {
        name = autor[1].name;
        email = autor[1].email;
        photo = autor[1].photoURL;
      }
    });

    let authors_comment = author_comments[0];
    let { uid } = user;
    let autor = authors.map(author => {
      return author[1];
    });

    authors_comment.forEach(author => {
      if (uid === author[0]) {
        name = author[1].name;
        email = author[1].email;
        photo = author[1].photoURL;
      }
    });
    return (
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row',
          // justifyContent: 'space-around',
          marginBottom: 10,
          marginTop: 5,
          marginLeft: 20,
        }}>
          <Ionicons style={{ alignSelf: 'flex-start', marginRight: 5 }} onPress={() => { navigation.goBack() }} name="ios-arrow-back" size={30} color="#2196f3" />
          <Image
            source={{ uri: photo }}
            style={{ width: 54, height: 54, borderRadius: 28, marginLeft: 25, }}
          />
          <Text style={{ marginTop: 10, marginLeft: 10, }}>{name}</Text>
        </View>
        <FlatList
          numColumns={3}
          data={publications}
          renderItem={({ item, index }) => <Publication authors_comments={authors_comment} comments={comments} navigation={navigation} item={item} author={autor[index]} user={user.email} profile={true} />}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
        />
        <Ionicons style={{ alignSelf: 'flex-end', marginRight: 10 }} onPress={() => { navigation.navigate('Slider') }} name="ios-aperture" size={54} color="#2196f3" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});

const mapStateToProps = state => ({
  publications: state.reducerPublicationsDownloaded,
  authors: state.reducerAuthorsDownloaded,
  comments: state.reducerCommentsDownloaded,
  author_comments: state.reducerAuthorsComments,
});

const mapDispatchToProps = dispatch => ({
  downloadPublication: () => {
    dispatch(actionDownloadPublication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationProfile);