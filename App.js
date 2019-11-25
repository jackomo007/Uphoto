import React from 'react';
import {Provider} from 'react-redux';
import Selector from './RouterSelector';
import Store from './store/Store'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name : 'jack'};
  }
  render(){
    return (
      <Provider store={Store}>
        <Selector />
      </Provider>
    );
  }
}