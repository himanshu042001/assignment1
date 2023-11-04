import React, { useState } from 'react';

function Section4() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="section4">
      <div className="agreement">
        <p>
          By ticking, you are confirming that you have understood and are agreeing to the details mentioned:
        </p>
        <ul>
          <li>I confirm that I am the authorized person to upload bank statements on behalf of my company</li>
          <li>I assure you that uploaded bank statements and provided company information match and are of the same company, if there is a mismatch then my report will not be generated</li>
          <li>I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth</li>
          <li>
            I have read and understand the{" "}
            <a
              href="https://smehealthcheck.credilinq.ai/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
      <div className="checkbox-and-button">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          I agree
        </label>
        <button
          className={isChecked ? 'enabled' : 'disabled'}
          disabled={!isChecked}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Section4;
