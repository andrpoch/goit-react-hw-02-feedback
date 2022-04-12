import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

class App extends Component {
  state = { 
  good: 0,
  neutral: 0,
  bad: 0
  }

  
  render() {
    return (

      <Notification message="There is no feedback"></Notification>
    );
  }
}

export default App;