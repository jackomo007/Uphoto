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
        if(element.uid === user.uid){
          imagenes.push({uri:element.secure_url});
        }
      });
    // const imagenes = [
    //   {
    //     uri:
    //       'https://i.pinimg.com/236x/2f/fe/5c/2ffe5c088db84138d4810c6613311f70.jpg',
    //   },
    //   {
    //     uri:
    //       'https://i.pinimg.com/236x/ab/01/7b/ab017b47ba1e35b10a019ed46b3ea04c.jpg',
    //   },
    //   {
    //     uri:
    //       'https://i.pinimg.com/236x/c1/64/41/c164415a1760a271c1f16598d024dc19.jpg',
    //   },
    //   {
    //     URI:
    //       'https://i.pinimg.com/236x/ec/3c/fb/ec3cfb739b32b0b909b17be8884ff20e.jpg',
    //   },
    //   {
    //     url:
    //       'https://i.pinimg.com/236x/3c/89/eb/3c89eb763cd2bc5254df068564fed8c1.jpg',
    //   },
    //   {
    //     URL:
    //       'https://i.pinimg.com/236x/27/d3/83/27d383fc75d596e6c69045df8fecbc63.jpg',
    //   },
    // ];
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