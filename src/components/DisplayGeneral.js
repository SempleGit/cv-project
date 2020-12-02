import React from 'react';

const DisplayGeneral = (props) => {
  const {name, email, phone} = props.formData;
  return (
    <div className="general-display">
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}

export default DisplayGeneral;