import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div className="container">
          <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;
