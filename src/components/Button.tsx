import React from 'react';
import './Button.css'

// Define the button's prop types:
type ButtonProps = {
  /** The text to display on the button */
  label: string;
  /** Callback fired when the button is clicked */
  onClick: () => void;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'default';
  /** Whether the button is disabled */
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'default',
  disabled = false,
}) => {
  // You might conditionally set some CSS class names based on the variant.
  // For example:
  const baseClass = 'button';
  const variantClass =
    variant === 'primary'
      ? 'button--primary'
      : variant === 'secondary'
      ? 'button--secondary'
      : 'button--default';

  return (
    <button
      className={`${baseClass} ${variantClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
