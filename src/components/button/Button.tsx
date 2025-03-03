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
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  border-radius: 6px;
  transition: background-color 0.3s;
  border: none;
  background-color: ${(props) =>props.theme.colors[props.variant]}
  color: ${(props) =>
    props.theme.colors.text};
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${props => props.theme.colors.accent}
    cursor: not-allowed;
    opacity: 0.6;
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
