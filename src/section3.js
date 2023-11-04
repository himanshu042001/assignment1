import React, { useState } from 'react';

function Section3() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileError, setFileError] = useState('');

  const validateFile = (file) => {
    if (file.type === 'application/pdf') {
      return 'green'; // Green border for PDF files
    } else {
      return 'red'; // Red border for non-PDF files
    }
  };

  const handleFileChange = (e) => {
    setFileError('');

    const newFiles = Array.from(e.target.files);

    if (uploadedFiles.length + newFiles.length > 6) {
      setFileError('You can upload a maximum of 6 documents.');
      return;
    }

    newFiles.forEach((file) => {
      const border = validateFile(file);
      setUploadedFiles((prevFiles) => [...prevFiles, { file, border }]);
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);

    if (uploadedFiles.length + newFiles.length > 6) {
      setFileError('You can upload a maximum of 6 documents.');
      return;
    }

    newFiles.forEach((file) => {
      const border = validateFile(file);
      setUploadedFiles((prevFiles) => [...prevFiles, { file, border }]);
    });
  };

  const removeAllFiles = () => {
    setUploadedFiles([]);
    setFileError('');
  };

  return (
    <div className="section3">
      <div
        className="uploader"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <div className="pdf-uploader">
          <label htmlFor="fileInput">
            <div className="upload-box">
              <i className="upload-icon">▶️</i>
              <p>Click to upload or drag and drop Bank Statements</p>
            </div>
          </label>
          <input
            type="file"
            id="fileInput"
            accept="application/pdf,.pdf"
            onChange={handleFileChange}
            multiple
          />
          {fileError && <p className="error-message">{fileError}</p>}
        </div>
        <div className="upload-text">
          <p>✔️PDFs (not scanned copies) of company's operating bank current account(s) statements for the past 6 months.</p>
          <p>✔️If your company is multi-banked, then please upload 6 months bank statements for each bank account.</p>
          <p>✔️If your file is password protected, we request you to remove the password and upload the file to avoid submission failure.</p>
          <p>✔️In case if you are facing any issue while uploading bank statements, please contact us on <a href="mailto:support@credilinq.ai">support@credilinq.ai</a>.</p>
        </div>
      </div>
      <div className="uploaded-files">
        {uploadedFiles.map((item, index) => (
          <div className="pdf-file" key={index} style={{ border: `2px solid ${item.border}` }}>
            <p>{item.file.name}</p>
          </div>
        ))}
      </div>
      <button className="remove-button" onClick={removeAllFiles}>
        Remove All
      </button>
    </div>
  );
}

export default Section3;
