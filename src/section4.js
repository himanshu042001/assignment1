import React from 'react';
import { useAppContext } from './AppContext';
import { useNavigate } from 'react-router-dom';

function Section4() {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate(); // Initialize useHistory

  const handleAgreementChange = () => {
    dispatch({
      type: 'UPDATE_COMPANY_DATA',
      payload: { isChecked: !state.companyData.isChecked },
    });
  };

  const handleSubmit = async () => {
    if (state.companyData.isChecked) {
      try {
        const response = await fetch('http://localhost:5000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state.companyData),
        });

        if (response.ok) {
          console.log('Data submitted successfully.');
          // Redirect to the result page after submission
          navigate('/result')// Use history.push to navigate to the result page
        } else {
          console.error('Data submission failed.');
        }
      } catch (error) {
        console.error('An error occurred while submitting the data:', error);
      }
    } else {
      console.error('You must agree to the terms before submitting.');
    }
  }

  return (
    <div className="section4">
      <div className="agreement">
        <p>
          By ticking, you are confirming that you have understood and are agreeing to the details mentioned:
        </p>
        <div className="upload-text">
    <p>✔️I confirm that I am the authorized person to upload bank statements on behalf of my company</p>
    <p>✔️I assure you that uploaded bank statements and provided company information match and are of the same company, if there is a mismatch then my report will not be generated</p>
    <p>✔️I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth</p>
    <p>✔️I have read and understand the <a href="https://smehealthcheck.credilinq.ai/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></p>
</div>

        <ul>
          {/* Add your agreement terms here */}
        </ul>
      </div>
      <div className="checkbox-and-button">
        <label >
          <input
            type="checkbox"
            checked={state.companyData.isChecked}
            onChange={handleAgreementChange}
          />
          I agree
        </label>
        <button
          className={state.companyData.isChecked ? 'enabled' : 'disabled'}
          disabled={!state.companyData.isChecked}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Section4;
