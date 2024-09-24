import React, { useState } from 'react';

const FeedbackSurvey = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Feedback:', feedback);
  };

  return (
    <div>
      <h2>Feedback Survey</h2>
      <textarea placeholder="Your feedback" onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackSurvey;
