import React, { useState } from 'react';
import DisplayGeneral from './DisplayGeneral'

const GeneralInfo = () => {
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
      <form className="general-form" onSubmit={handleSubmit}>
        <label>Name: 
          <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}></input>
        </label>
        <label>email: 
          <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
        </label>
        <label>Phone: 
          <input type="tel" pattern="1?+?[0-9]{3}-[0-9]{3}-[0-9]{4}|\b1?[0-9]{10}$" required placeholder='555-555-5555' onChange={(e) => setPhone(e.target.value)} value={phone}></input>
        </label>
        <div className="submit-div">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <DisplayGeneral formData={formData} />
    </div>
  )
}

export default GeneralInfo;