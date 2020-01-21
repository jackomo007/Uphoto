import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { actionDownloadPublication } from '../../store/Actions';
import SearchPublication from './SearchPublication';

class Search extends React.Component {
  render() {
    const { navigation, authors, user } = this.props;
    return (
      <View style={styles.container}>
        <Text>Search by publications...</Text>
        <FlatList
          numColumns={3}
          data={this.props.publications}
          renderItem={({ item, index }) => <SearchPublication item={item} author={authors[index]} user={user.email} profile={true} />}
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
    justifyContent: 'space-between',
  }
});


const mapStateToProps = state => ({
  publications: state.reducerPublicationsDownloaded,
  authors: state.reducerAuthorsDownloaded,
  user: state.reducerSession,
});

const mapDispatchToProps = dispatch => ({
  downloadPublication: () => {
    dispatch(actionDownloadPublication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);