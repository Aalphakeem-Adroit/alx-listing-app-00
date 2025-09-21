// This file will define a reusable Button component, which will be used for actions like “Book Now,” “Details,” etc.

import React from 'react';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    {label}
  </button>
);

export default Button;