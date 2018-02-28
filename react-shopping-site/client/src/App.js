import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({
        users: users.users
      }));
  }

  render() {
    return (
      <div>
        {this.state.users.map(user =>
          <div key={user.user1}>{user.user1}</div>
        )}
      </div>
    );
  }
}

export default App;
