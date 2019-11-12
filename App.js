import React from 'react';
import RoutesAuth from './components/auth/routes';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name : 'jack'};
  }
  render(){
    return (
      <RoutesAuth />
    );
  }
}