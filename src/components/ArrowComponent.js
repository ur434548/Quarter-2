// CustomArrow.js
import React from 'react';

const CustomArrow = ({ className, style, onClick, icon }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: 'lightgrey',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      padding:"10px",
      margin:"-10px -10px -10px -24px"
    
    }}
    onClick={onClick}
  >
    {icon}
  </div>
);

export default CustomArrow;
