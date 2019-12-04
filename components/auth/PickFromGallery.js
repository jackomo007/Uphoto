import React from 'react';
import {connect} from 'react-redux';
import {blur} from 'redux-form';
import {actionLoadImagePublication, actionUploadPublication, actionCleanImagePublication} from '../../store/Actions';
import { Button, View, StyleSheet, Text } from 'react-native';
import ImageUpload from "../ImageUpload";
import PickFromGalleryForm from './PickFromGalleryForm';

class PickFromGallery extends React.Component {
  static navigationOptions = {
    title: 'Pick Up a Photo!',
  };

  componentWillUnmount(){
    this.props.cleanImage();
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
});


export default connect(mapStateToProps, mapDispatchToProps)(PickFromGallery)