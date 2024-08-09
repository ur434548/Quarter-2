import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'lightgrey',
        borderRadius: '50%',
        padding: '10px',
        marginRight: '-20px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowRight style={{ color: 'black', fontSize: '20px' }} />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'lightgrey',
        borderRadius: '50%',
        padding: '10px',
        marginLeft: '-20px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowLeft style={{ color: 'black', fontSize: '20px' }} />
    </div>
  );
};

export { NextArrow, PrevArrow };
