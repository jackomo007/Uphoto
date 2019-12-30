import React from 'react';
import { Button, View, Alert, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import { actionUploadComment, actionCleanCommentUploaded } from '../../store/Actions';
import Comments from './Comments';
import CreateCommentForm from './CreateCommentForm';

class CreateComment extends React.Component {
  static navigationOptions = {
    title: 'Comment a Photo...',
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.stateCommentUploaded !== nextProps.stateCommentUploaded) {
      switch (nextProps.stateCommentUploaded) {
        case 'SUCCESS':
          Alert.alert('Success:', 'Comment published successfully!', [{
            text: 'Yeahh!', onPress: () => {
              this.props.navigation.goBack();
            }
          }]);
          break;
        case 'ERROR':
          Alert.alert('Whoops:', 'Something gone wrong, try again!', [{
            text: 'Retry', onPress: () => {
              this.props.navigation.goBack();
            }
          }]);
          break;
        default:
          break;
      }
    }
  }

  render() {
    const { navigation } = this.props;
    let publication_id = navigation.getParam('publication_id');
    let comentarios = navigation.getParam('comentarios');
    let authors_comments = navigation.getParam('authors_comments');
    return (
      <View>
        <CreateCommentForm
          register={(values) => {
            values.publication_id = {publication_id};
            this.props.uploadComment(values);
          }}
        />
        <FlatList
          data={comentarios}
          renderItem={({ item }) => <Comments item={item} authors_comments={authors_comments} />}
          keyExtractor={(item, index) => index.toString()}
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


const mapStateToProps = (state) => ({
  stateCommentUploaded: state.reducerCommentUploaded.status,
});

const mapDispatchToProps = dispatch => ({
  uploadComment: (values) => {
    dispatch(actionUploadComment(values));
  },
  cleansStateCommentUploaded: () => {
    dispatch(actionCleanCommentUploaded());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)