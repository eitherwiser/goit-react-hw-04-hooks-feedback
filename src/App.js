import './App.css';
import React from 'react';
import { useState } from 'react';
import Section from './components/section/Section';
import Statistics from './components/statistics/Statistics';
import FeedbackOptions from './components/feedback/FeedbackOptions';
import Notification from './components/notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [
    { good: () => setGood(state => state + 1) },
    { neutral: () => setNeutral(state => state + 1) },
    { bad: () => setBad(state => state + 1) },
  ];

  const total = good + neutral + bad;

  return (
    <>
      <Section title="Please leave feedback" className="feedback">
        <FeedbackOptions options={options} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
          </>
        ) : (
          <Notification message="There are no feedbacks here yet." />
        )}
      </Section>
    </>
  );
};

export default App;
