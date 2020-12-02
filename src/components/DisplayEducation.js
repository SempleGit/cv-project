import React from 'react';

const DisplayEducation = (props) => {
  const {school, major, graduationDate} = props.formData;
  return (
    <div className="general-display">
      <p>{school}</p>
      <p>{major}</p>
      <p>{graduationDate}</p>
    </div>
  )
}

export default DisplayEducation;