import { Component } from 'react';
import Feedback from  './Feedback/feedback';
import Section from './Section/section';
import Statistics from './Statistics/statistics';
import Notification from './Notification/notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  changePoint = e => {
    this.setState(prevState => {
      const currentName = e.target.name;
      return { [currentName]: prevState[currentName] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  render () {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    return (
      <>
        <Section title='Please leave feedback'>
      <Feedback
          options={options}
          onLeaveFeedback={this.changePoint}
      />
</Section>
<Section title='Statistics'>
{!!totalFeedback && (
    <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={totalFeedback}
      positivePercentage={this.countPositiveFeedbackPercentage()}
      />
)}
</Section>
{!totalFeedback && <Notification message="There is no feedback" />}
      </>
    )
  }
}

export default App;