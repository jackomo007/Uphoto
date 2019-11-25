import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { auth } from './store/Services/Firebase';
import RoutesGuest from './components/guest/routes';
import RoutesAuth from './components/auth/routes';
import { actionSession, actionLogout } from './store/Actions';


class Selector extends React.Component {
    componentDidMount(){
        this.props.authentication();
    }
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {this.props.user ? <RoutesAuth /> : <RoutesGuest />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});

const mapStateToProps = (state) => ({
    user: state.reducerSession
});

const mapDispatchToProps = dispatch => ({
    authentication:() => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
                console.log(user);
                dispatch(actionSession(user));
            } else {
                console.log('Session doesnt exist!');
                dispatch(actionLogout());
            }
        });
    }, 
});


export default connect(mapStateToProps, mapDispatchToProps)(Selector)