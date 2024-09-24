import React from 'react';
import NewHireProfileForm from './components/NewHireProfileForm';
import DocumentUpload from './components/DocumentUpload';
import TaskAssignment from './components/TaskAssignment';
import OnboardingChecklist from './components/OnboardingChecklist';
import OrientationTraining from './components/OrientationTraining';
import FeedbackSurvey from './components/FeedbackSurvey';

const OnboardingPortal = () => {
  return (
    <div className="onboarding-portal">
      <h1>HRMS Employee Onboarding</h1>
      <NewHireProfileForm />
      <DocumentUpload />
      <TaskAssignment />
      <OnboardingChecklist />
      <OrientationTraining />
      <FeedbackSurvey />
    </div>
  );
};

export default OnboardingPortal;
