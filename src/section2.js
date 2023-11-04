import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Section2() {
  const [fullname, setFullname] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [reEnterEmail, setReEnterEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (value) => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePhone = (value) => {
    // You can validate the phone number here if needed
    setPhoneError('');
  };

  return (
    <div className="section2">
      <div className="input-div">
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position with Company"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      <div className="input-div">
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        <p className="error-message">{emailError}</p>
        <input
          type="email"
          placeholder="Re-enter Email ID"
          value={reEnterEmail}
          onChange={(e) => setReEnterEmail(e.target.value)}
        />
      </div>

      <div className="input-div">
        <PhoneInput
          country={'sg'}
          placeholder="Phone Number"
          value={phone}
          onChange={(value) => {
            setPhone(value);
            validatePhone(value);
          }}
        />
        <p className="error-message">{phoneError}</p>
      </div>
    </div>
  );
}

export default Section2;
