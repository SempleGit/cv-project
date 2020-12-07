import React from 'react';

const DisplayEducation = (props) => {
  const {formData: {school, major, graduationDate}} = props;
  return (
    <div className="general-display">
      <h2 className="section-header">Education</h2>
      <p>{school}</p>
      <p>{major}</p>
      <p>{graduationDate}</p>
    </div>
  )
}

export default DisplayEducation;