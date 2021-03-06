import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, } from 'react-native';
import { connect } from 'react-redux';
import { actionDownloadPublication } from '../../store/Actions';
import Publication from './Publication';
class Home extends React.Component {
  componentDidMount() {
    this.props.downloadPublication();
  }
  render() {
    const { navigation, authors, likes, user, publications, comments, author_comments } = this.props;
    let user_likes = "";
    if (Array.isArray(likes) && likes.length) {
      user_likes = likes[0];
    }
    let authors_comment = author_comments[0];
    
    let autor = authors.map(author => {
      return author[1];
    });
    return (
      <View style={styles.container}>
        <FlatList
          data={publications}
          renderItem={({ item, index }) => <Publication user_likes={user_likes} authors_comments={authors_comment} authors={authors} comments={comments} navigation={navigation} item={item} author={autor[index]} user={user.email} profile={false} />}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },
  separator: {
    borderWidth: 2,
    borderColor: '#C0C0C0',
  }
});

const mapStateToProps = state => ({
  publications: state.reducerPublicationsDownloaded,
  authors: state.reducerAuthorsDownloaded,
  comments: state.reducerCommentsDownloaded,
  user: state.reducerSession,
  author_comments: state.reducerAuthorsComments,
  likes: state.reducerLikes,
});

const mapDispatchToProps = dispatch => ({
  downloadPublication: () => {
    dispatch(actionDownloadPublication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
