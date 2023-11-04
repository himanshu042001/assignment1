import React, { useState } from 'react';

function Section3() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [invalidFiles, setInvalidFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    checkFileTypes(newFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    checkFileTypes(newFiles);
  };

  const checkFileTypes = (files) => {
    const pdfFilesList = files.filter((file) => file.type === 'application/pdf');
    const nonPdfFilesList = files.filter((file) => file.type !== 'application/pdf');
    setPdfFiles([...pdfFiles, ...pdfFilesList]);
    setInvalidFiles([...invalidFiles, ...nonPdfFilesList]);
  };

  return (
    <div className="section">
      <div className="pdf-uploader">
        <label
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          htmlFor="pdfInput"
        >
          <div className="upload-icon">📁</div>
          <p>Click to upload or drag and drop Bank Statements</p>
        </label>
        <input
          type="file"
          id="pdfInput"
          accept=".pdf"
          multiple
          onChange={handleFileChange}
        />
      </div>
      
      {pdfFiles.map((file, index) => (
        <div className="pdf-file" key={index}>
          <p>{file.name}</p>
        </div>
      ))}
      {invalidFiles.map((file, index) => (
        <div className="pdf-file invalid" key={index}>
          <p>{file.name}</p>
        </div>
      ))}
      <div className="upload-text">
        <p>✔️PDFs (not scanned copies) of company's operating bank current account(s) statements for the past 6 months.</p>
        <p>✔️If your company is multi-banked, then please upload 6 months bank statements for each bank account.</p>
        <p>✔️If your file is password protected, we request you to remove the password and upload the file to avoid submission failure.</p>
        <p>✔️In case if you are facing any issue while uploading bank statements, please contact us on <a href="mailto:support@credilinq.ai">support@credilinq.ai</a>.</p>
      </div>
    </div>
  );
}

export default Section3;
