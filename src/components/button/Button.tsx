import React from 'react';
import styled from 'styled-components';

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

// Styled components for different button variants
const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | 'default' }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s;
  border: ${(props) =>
    props.variant === 'default' ? '1px solid #ccc' : 'none'};
  background-color: ${(props) =>
    props.variant === 'primary'
      ? '#007bff'
      : props.variant === 'secondary'
      ? '#6c757d'
      : '#fff'};
  color: ${(props) =>
    props.variant === 'default' ? '#000' : '#fff'};
  &:hover {
    opacity: 0.8;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'default',
  disabled = false,
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
