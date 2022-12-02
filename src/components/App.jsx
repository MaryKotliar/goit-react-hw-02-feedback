import { Component } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleFeedbackGood = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  // handleFeedbackNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  // handleFeedbackBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
  };
  static propTypes = {};
  render() {
    const stateItemNames = Object.keys(this.state);

    return (
      <>
        <h2>Please leave feedback</h2>
        {/* <FeedbackOptions options={stateItemNames} onLeaveFeedback={}></FeedbackOptions> */}
        {/* <button onClick={this.handleFeedbackGood}>Good</button>
        <button onClick={this.handleFeedbackNeutral}>Neutral</button>
        <button onClick={this.handleFeedbackBad}>Bad</button> */}
        <FeedbackOptions
          options={stateItemNames}
          onLeaveFeedback={() => this.handleFeedback()}
        ></FeedbackOptions>
        <h2>Statistics</h2>
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={
            this.state.good && this.countPositiveFeedbackPercentage()
          }
        ></Statistic>
      </>
    );
  }
}
