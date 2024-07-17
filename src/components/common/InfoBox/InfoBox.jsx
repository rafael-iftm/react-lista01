// src/components/common/InfoBox.jsx
import React from 'react';
import './InfoBox.css';

function InfoBox({ text }) {
  return (
    <div className="info-box">
      {text}
    </div>
  );
}

export default InfoBox;
