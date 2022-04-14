import React, { Component } from 'react';
import Section from "./Section/Section";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


class App extends Component {
  state = { 
  good: 0,
  neutral: 0,
  bad: 0
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = Math.round((100 / total) * good);
    return percentage;
  }
  onLeaveFeedback = (key) => {
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }))
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    return (
      <>
    <Section title='Please leave feedback'>
        <FeedbackOptions
        options={Object.keys(this.state)}
        onClick={this.onLeaveFeedback}>
        </FeedbackOptions>
        </Section>
          <Section title="Statistic">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
      <Notification message="There is no feedback"/>
          )}
        </Section>
      </>
    );
  }
}

export default App;