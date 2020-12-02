import React, { useState } from 'react';
import DisplayGeneral from './DisplayGeneral'
import GeneralInputs from './GeneralInputs';

const GeneralSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formData, setForm] = useState({});
  
const handleSubmit = (e) => {
  e.preventDefault();
  setForm({name: name, email: email, phone: phone});
  setName('');
  setPhone('');
  setEmail('');
}

  return (
    <div className="general-wrapper">
      <GeneralInputs parameters={ {name, email, phone, setName, setEmail, setPhone, handleSubmit} } />
      <DisplayGeneral formData={formData} />
    </div>
  )
}

export default GeneralSection;