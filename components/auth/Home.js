import React from 'react';
import { View, StyleSheet, Text,  Button, FlatList, } from 'react-native';
import { connect } from 'react-redux';
import { actionDownloadPublication } from '../../store/Actions';
import Publication from './Publication';
class Home extends React.Component {
  componentDidMount(){
    this.props.downloadPublication();
  }
  render() {
    const { navigation, authors,user } = this.props;
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.props.publications}
          renderItem={({item,index}) => <Publication item={item} author={authors[index]} user={user.email} profile={false}/>}
          ItemSeparatorComponent={() => (
            <View style={styles.separator }/>
          )}
        />
        {/* <Text style={{color: 'white'}}>Home!</Text>
        <Button 
        title='Author'
        onPress={()=>{navigation.navigate('Author')}}
        />
        <Button 
        title='Comments'
        onPress={()=>{navigation.navigate('Comments')}}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
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
  user: state.reducerSession,
});

const mapDispatchToProps = dispatch => ({
  downloadPublication: () => {
    dispatch(actionDownloadPublication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
