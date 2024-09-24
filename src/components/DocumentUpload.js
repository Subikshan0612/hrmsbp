import React, { useState } from 'react';

const DocumentUpload = () => {
  const [documents, setDocuments] = useState(null);

  const handleFileChange = (e) => {
    setDocuments(e.target.files[0]);
  };

  const handleUpload = () => {
    console.log('Documents uploaded:', documents);
  };

  return (
    <div>
      <h2>Document Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default DocumentUpload;
