import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actionDownloadPublication } from '../../store/Actions';
import GallerySwiper from 'react-native-gallery-swiper';

class Slider extends React.Component {
  render() {
    const { navigation, user, publications } = this.props;
    const imagenes = [];
    publications.forEach(element => {
      if (element.uid === user.uid) {
        imagenes.push({ uri: element.secure_url });
      }
    });
    return <GallerySwiper images={imagenes} />;
  }
}
const mapStateToProps = state => ({
  publications: state.reducerPublicationsDownloaded,
  user: state.reducerSession,
});

const mapDispatchToProps = dispatch => ({
  downloadPublication: () => {
    dispatch(actionDownloadPublication());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);