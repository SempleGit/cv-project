import React from 'react';

const DisplayGeneral = (props) => {
  const {name, email, phone} = props.formData;
  return (
    <div className="general-display">
      <h2 className="section-header">Contact Information</h2>
      {name && <div className="item-display">
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone ? formatPhone(phone) : ''}</p>
      </div>}
    </div>
  )
}

const formatPhone = (phone) => {
  const phoneArray = phone.replace('-', '').split('');
  const countryCode = phoneArray.length === 11 ? `${phoneArray[0]} ` : '';
  const lastFour = phoneArray.splice(phoneArray.length - 4, 4).join('');
  const midThree = phoneArray.splice(phoneArray.length - 3, 3).join('');
  const firstThree = phoneArray.splice(phoneArray.length - 3, 3).join('');
  return `${countryCode}(${firstThree}) ${midThree}-${lastFour}`;
}

export default DisplayGeneral;