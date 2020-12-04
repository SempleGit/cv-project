import React from 'react';

const DisplayEducation = (props) => {
  const {formData: {school, major, graduationDate}} = props;
  return (
    <div className="general-display">
      <p>{school}</p>
      <p>{major}</p>
      <p>{graduationDate}</p>
    </div>
  )
}

export default DisplayEducation;