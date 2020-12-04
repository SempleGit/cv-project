import React from 'react';

const DisplayExperience = (props) => {
  const {formData: {jobTitle, duties, startDate, endDate}} = props;
  return (
    <div className="general-display">
      <p>{jobTitle}</p>
      <p>{duties}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </div>
  )
}

export default DisplayExperience;