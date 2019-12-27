import React from 'react';
import { View, StyleSheet, Text, Button, FlatList,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../store/Services/Firebase';
import { connect } from 'react-redux';
import { actionDownloadPublication } from '../../store/Actions';
import Publication from './Publication';

class Profile extends React.Component {
  render() {
    const { navigation, authors, user, publications, comments, author_comments } = this.props;
    let name ="";
    let email ="";
    let photo ="";
    let authors_comment = author_comments[0];
    let {uid} = user;
    let autor = authors.map(author => {
      return author[1];
    });

    authors_comment.forEach(author => {
      if(uid === author[0]){
        name =    author[1].name;
        email=  author[1].email;
        photo=    author[1].photoURL;
      }
    });
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginBottom: 10,
                      marginTop:5,
                      marginLeft:15,}}>
          <Image
            source={{ uri: photo }} 
            style={{ width: 54, height: 54, borderRadius: 28 }}
          />
          <Text style={{ marginTop:10, marginLeft:5, }}>{name}</Text>
          <Ionicons onPress={()=>{ auth.signOut();}} name="ios-exit" size={54} color="#2196f3" />
        </View>
        <FlatList 
        numColumns={3} 
        data={publications}
          renderItem={({ item, index }) => <Publication authors_comments={authors_comment} comments={comments} navigation={navigation} item={item} author={autor[index]} user={user.email} profile={true} />}
          ItemSeparatorComponent={() => (
          <View style={styles.separator }/>
        )}
        />
        <Ionicons style={{ alignSelf: 'flex-end', marginRight: 10 }} onPress={()=>{navigation.navigate('Slider')}} name="ios-aperture" size={54} color="#2196f3" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});

const mapStateToProps = state => ({
  publications: state.reducerPublicationsDownloaded,
  authors: state.reducerAuthorsDownloaded,
  comments: state.reducerCommentsDownloaded,
  user: state.reducerSession,
  author_comments: state.reducerAuthorsComments,
});

const mapDispatchToProps = dispatch => ({
  downloadPublication: () => {
    dispatch(actionDownloadPublication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);