import React from 'react';

const DisplayEducation = (props) => {

  const educationList = props.formData.map(({school, major, graduationDate, id}) => {
    return (
      <div className="item-display" key={id}>
        <p>{school}</p>
        <p>{major}</p>
        <p>{graduationDate}</p>
        <button onClick={() => props.onDelete(id)}>Delete</button>
        <button onClick={() => props.onEdit(id)}>Edit</button> 
      </div>
    )
  })

  return (
    <div className="general-display">
      <h2 className="section-header">Education</h2>
      {educationList}
    </div>
  )
}

export default DisplayEducation;