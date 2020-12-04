import React from 'react';

const DisplayExperience = (props) => {
  const {jobTitle, duties, startDate, endDate} = props.formData;  
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