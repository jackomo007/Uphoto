import React from 'react';
import { View, StyleSheet, Text, Button, FlatList,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchForm from '../guest/Form/SearchForm';
import { connect } from 'react-redux';
import { actionDownloadPublication } from '../../store/Actions';
import SearchPublication from './SearchPublication';

class Search extends React.Component {
  render() {
    const { navigation, authors, user } = this.props;
    return (
      <View style={styles.container}>
       <View style={{ flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginBottom: 10,
                      marginTop:5,
                      marginLeft:15,}}>
          <SearchForm />
          <Ionicons style={{  marginRight: 10 }}onPress={()=>{ console.log('searching...');}} name="ios-search" size={54} color="#2196f3" />
        </View>
        <FlatList 
        numColumns={3} 
        data={this.props.publications}
        renderItem={({item,index}) => <SearchPublication item={item} author={authors[index]} user={user.email} profile={true}/>}
        ItemSeparatorComponent={() => (
          <View style={styles.separator }/>
        )}
        />
        <Button title="SEARCH"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
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