import React from 'react';
import { View, StyleSheet, Text,  Button } from 'react-native';
import { connect } from 'react-redux';
import { actionDownloadPublication } from '../../store/Actions';

class Home extends React.Component {
  componentDidMount(){
    this.props.downloadPublication();
  }
  render() {
    console.log(this.props.publications);
    
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Home!</Text>
        <Button 
        title='Author'
        onPress={()=>{navigation.navigate('Author')}}
        />
        <Button 
        title='Comments'
        onPress={()=>{navigation.navigate('Comments')}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  }
});

const mapStateToProps = state => ({
  publications: state.reducerPublicationsDownloaded,
});

const mapDispatchToProps = dispatch => ({
  downloadPublication: () => {
    dispatch(actionDownloadPublication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
