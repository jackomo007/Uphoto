import React from 'react';
import { Button, View, Alert, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { actionLikePublication } from '../../store/Actions';

class LikePublication extends React.Component {
  render() {
    const { publication_id, likes } = this.props;
    let name =  "ios-heart-empty";
    let color="#2196f3";
     if (Array.isArray(likes) && likes.length) {
      likes.forEach(like => {
        if (like===publication_id) {
          name = "ios-heart";
          color="red";
        }
      });
    }
   
    return (
      <View>
        <Ionicons name={name} size={30} color={color}
          onPress={() => {
            this.props.likePublication(publication_id);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  stateLikePublication: state.reducerLikePublication.status,
});

const mapDispatchToProps = dispatch => ({
  likePublication: (values) => {
    dispatch(actionLikePublication(values));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(LikePublication)