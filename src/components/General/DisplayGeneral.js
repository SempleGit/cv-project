import React from 'react';

const DisplayGeneral = (props) => {
  const {name, email, phone} = props.formData;
  return (
    <div className="general-display">
      <h2 className="section-header">Contact Information</h2>
      {name && <div className="item-display">
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button onClick={props.onDelete}>Delete</button>
      </div>}
    </div>
  )
}

export default DisplayGeneral;