import React from "react";

const ProgressCircle = ({ skillName, percentage, icons, darkTheme, alt }) => {
  const circumference = 20 * 2 * Math.PI;
  const dashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-circle-container">
      <div className="flex flex-col justify-center">
        <div className="progress-circle">
          <svg className="progress-circle-svg">
            <circle
              className="progress-circle-bg"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="50%"
              cy="50%"
            />
            <circle
              className="progress-circle-fg"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="50%"
              cy="50%"
            />
          </svg>
        </div>
      </div>
      <div className="progress-circle-icon">
        <img
          className="progress-circle-img"
          src={darkTheme ? icons.dark : icons.light}
          alt={alt}
        />
      </div>
      <div className="progress-circle-text">
        <p>{skillName}</p>
      </div>
    </div>
  );
};

export default ProgressCircle;
