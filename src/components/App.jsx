// import { useState, useEffect } from 'react';
// import Feedback from  './Feedback/feedback';
// import Section from './Section/section';
// import Statistics from './Statistics/statistics';
// import Notification from './Notification/notification';

// export function App() {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const [prevState, setPrevState] = useState(0);

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const changePoint = e => {
//     setPrevState(prevState => {
//       const currentName = e.target.name;
//       return { [currentName]: prevState[currentName] + 1 };
    
//     }) };
    

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     return Math.round((good * 100) / total);
//   };

//   const options = { good, neutral, bad };
//   const totalFeedback = countTotalFeedback();
//     return (
//       <>
//         <Section title='Please leave feedback'>
//       <Feedback
//           options={options}
//           onLeaveFeedback={changePoint}
//       />
// </Section>
// <Section title='Statistics'>
// {!!totalFeedback && (
//     <Statistics 
//     good={good} 
//     neutral={neutral} 
//     bad={bad} 
//     total={totalFeedback}
//     positivePercentage={countPositiveFeedbackPercentage()}
//     />
// )} 
// </Section>
// {!totalFeedback && <Notification message="There is no feedback" /> }
//       </>
//     )
//   }

// export default App;



import { useState } from 'react';
import Feedback from  './Feedback/feedback';
import Section from './Section/section';
import Statistics from './Statistics/statistics';
import Notification from './Notification/notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = {good, neutral, bad};

  const leaveGoodFeedback = () => {
    setGood(good + 1);
  }
  const leaveNeutralFeedback = () => {
    setNeutral(neutral + 1);
  }
  const leaveBadFeedback = () => {
    setBad(bad + 1);
  }

  const changePoint = key => {
    if (key === 'good') {
      leaveGoodFeedback();
    }
    if (key === 'neutral') {
      leaveNeutralFeedback();
    }
    if (key === 'bad') {
      leaveBadFeedback();
    }
      };

  const totalFeedback = () => {
        return good + neutral + bad;
      };

  const countPositiveFeedbackPercentage = () => {
       return totalFeedback() === 0
          ? '0'
          : ((good / totalFeedback()) * 100).toFixed(0);
      };

  return (
    <>
      <Section title='Please leave feedback'>
    <Feedback
        options={Object.keys(options)}
        onLeaveFeedback={changePoint}
    />
</Section>
<Section title='Statistics'>
{!!totalFeedback && (
  <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
    total={totalFeedback()}
    positivePercentage={countPositiveFeedbackPercentage()}
    />
)}
</Section>
{!totalFeedback && <Notification message="There is no feedback" />}
    </>
  )
}

// import { useState } from 'react';
// import Feedback from  './Feedback/feedback';
// import Section from './Section/section';
// import Statistics from './Statistics/statistics';
// import Notification from './Notification/notification';

// export default function App() {

// const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const FeedbackType = { good, neutral, bad };

//   const leaveFeedbackGood = () => {
//     setGood(good + 1);
//   };
//   const leaveFeedbackNeutral = () => {
//     setNeutral(neutral + 1);
//   };
//   const leaveFeedbackBad = () => {
//     setBad(bad + 1);
//   };

//   const leaveFeedback = key => {
//     if (key === 'good') {
//       leaveFeedbackGood();
//     }
//     if (key === 'neutral') {
//       leaveFeedbackNeutral();
//     }
//     if (key === 'bad') {
//       leaveFeedbackBad();
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     return countTotalFeedback() === 0
//       ? '0'
//       : ((good / countTotalFeedback()) * 100).toFixed(0);
//   };

//   return (
//     <div className="Feedback">
//       <Section title="Please, leave feedback">
//         <div>
//           <Feedback
//             options={Object.keys(FeedbackType)}
//             onLeaveFeedback={leaveFeedback}
//           />
//         </div>
//       </Section>
//       <Section title="Statistics">
//         {countTotalFeedback() ? (
//           <Statistics
//             options={FeedbackType}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// }

