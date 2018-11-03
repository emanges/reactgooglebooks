import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron bsStyle="primary">
         <h1>Search for your favorite books here!</h1>
      </Jumbotron>
    );
  }
}

export default Header;
