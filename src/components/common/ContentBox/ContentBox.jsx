// src/components/common/ContentBox.jsx
import React from 'react';
import './ContentBox.css';

function ContentBox({ text }) {
  return (
    <div className="content-box">
      {text}
    </div>
  );
}

export default ContentBox;
