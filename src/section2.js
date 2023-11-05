import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useAppContext } from './AppContext';

function Section2() {
  const { state, dispatch } = useAppContext();

  const [emailError, setEmailError] = useState('');
  const [reEnterEmail, setReEnterEmail] = useState('');
  const [reEnterEmailError, setReEnterEmailError] = useState('');
  const [phoneError, setPhoneError] = useState(''); // Define phoneError state

  const validateEmail = (value) => {
    const emailPattern = /\S+@\S+\.\S+/;
    const isValid = emailPattern.test(value);
    setEmailError(isValid ? '' : 'Invalid email address');
    dispatch({
      type: 'UPDATE_COMPANY_DATA',
      payload: { email: value },
    });
  };

  const validateReEnterEmail = (value) => {
    if (value === state.companyData.email) {
      setReEnterEmailError('');
    } else {
      setReEnterEmailError('Emails do not match');
    }
    setReEnterEmail(value);
  };

  const validatePhone = (value) => {
    // You can add phone number validation here if needed
    setPhoneError(''); // Reset phoneError
    dispatch({
      type: 'UPDATE_COMPANY_DATA',
      payload: { phone: value },
    });
  };

  return (
    <div className="section2">
      <div className="input-div">
        <input
          type="text"
          placeholder="Full Name"
          value={state.companyData.fullname}
          onChange={(e) => {
            dispatch({
              type: 'UPDATE_COMPANY_DATA',
              payload: { fullname: e.target.value },
            });
          }}
        />
        <input
          type="text"
          placeholder="Position with Company"
          value={state.companyData.position}
          onChange={(e) => {
            dispatch({
              type: 'UPDATE_COMPANY_DATA',
              payload: { position: e.target.value },
            });
          }}
        />
      </div>
<div className="email-container">
      <div className="input-div">
        <input
          type="email"
          placeholder="Email ID"
          value={state.companyData.email}
          onChange={(e) => {
            validateEmail(e.target.value);
          }}
          style={{ borderColor: emailError ? 'red' : 'black' }}
        />
        <p className="error-message">{emailError}</p>
      </div>

      <div className="input-div">
        <input
          type="email"
          placeholder="Re-enter Email ID"
          value={reEnterEmail}
          onChange={(e) => {
            validateReEnterEmail(e.target.value);
          }}
          style={{ borderColor: reEnterEmailError ? 'red' : 'black' }}
        />
        <p className="error-message">{reEnterEmailError}</p>
      </div>
      </div>

      <div className="input-div">
        <PhoneInput
          className="phone-input"
          country={'sg'}
          placeholder="Phone Number"
          value={state.companyData.phone}
          onChange={(value) => {
            validatePhone(value);
          }}
        />
        <div className='filler'></div>
        <p className="error-message">{phoneError}</p>
      </div>
    </div>
  );
}

export default Section2;
