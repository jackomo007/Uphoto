import React from 'react';
import {connect} from 'react-redux';
import {blur} from 'redux-form';
import {actionLoadImagePublication, actionUploadPublication, actionCleanImagePublication, actionCleanPublicationUploaded} from '../../store/Actions';
import { Button, View, StyleSheet, Text, Alert } from 'react-native';
import ImageUpload from "../ImageUpload";
import PickFromGalleryForm from './PickFromGalleryForm';

class PickFromGallery extends React.Component {
  static navigationOptions = {
    title: 'Pick Up a Photo!',
  };

  componentWillUnmount(){
    this.props.cleanImage();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.statePublicationUploaded !== nextProps.statePublicationUploaded){
      switch (nextProps.statePublicationUploaded) {
        case 'SUCCESS':
          Alert.alert('Success:', 'Photo published successfully!', [{text:'Ok', onPress: () => {
            this.props.cleanStatePublicationUploaded();
            this.props.navigation.goBack();
          }}]);
          break;
        case 'ERROR':
            Alert.alert('Whoops:', 'Something gone wrong, try again!', [{text:'Retry', onPress: () => {
              this.props.cleanStatePublicationUploaded();
              this.props.navigation.goBack();
            }}]);
        break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <ImageUpload 
            image={this.props.image.image} 
            load={this.props.loadImage}
            radius
          />
        </View> 
        <View styles={styles.text}>
          <PickFromGalleryForm 
            image={this.props.image.image} 
            register={(values) => {
              this.props.uploadPublication(values);
            }}
          />
        </View>
        <View styles={styles.button}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  text:{
    alignItems: 'center',
  }
});

const mapStateToProps = (state) => ({
  image: state.reducerImagePublication,
  statePublicationUploaded: state.reducerPublicationUploaded.status,
});

const mapDispatchToProps = dispatch => ({
  loadImage: (image) => {
    dispatch(actionLoadImagePublication(image));
    dispatch(blur('PickFromGalleryForm','image',Date.now()));
  },
  uploadPublication: (values) => {
    dispatch(actionUploadPublication(values));
  },
  cleanImage: () => {
    dispatch(actionCleanImagePublication());
  },
  cleanStatePublicationUploaded: () => {
    dispatch(actionCleanPublicationUploaded());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(PickFromGallery)