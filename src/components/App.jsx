import React, { useState } from "react";
import { countTotalFeedback } from "./Statistics/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "./Statistics/countPositiveFeedbackPercentage";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import friends from './data/friends.json';
import { Gallery } from "./Gallery/Gallery";
import { Notification } from "./Notificati0n/Notification";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleOption = option => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1
    }));
  }

  const totalFeedback = countTotalFeedback(feedback);

  const statisticsData = [
    { title: "Good", value: feedback.good },
    { title: "Neutral", value: feedback.neutral },
    { title: "Bad", value: feedback.bad },
    { title: "Total", value: totalFeedback },
    { title: "Positive feedback", value: countPositiveFeedbackPercentage(feedback) },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper__header">
          <Section title="Please leave feedback">
            <FeedbackOptions
              onLeaveFeedback={handleOption}
              options={Object.keys(feedback)}
              friends={friends}
            />
          </Section>
          <Section title="Statistics">
            {totalFeedback > 0
              ? (<Statistics data={statisticsData} />)
              : (<Notification message="There is no feedback" />)
            }
          </Section>
        </div>
        <Gallery friends={friends} />
      </div>
    </div>
  );
}


