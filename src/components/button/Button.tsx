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
  letter-spacing: ${props => props.theme.letterSpacing.text};
  font-size:${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight[props.theme.mode].regular};
  border-radius: 6px;
  transition: background-color 0.3s;
  border: none;
  background-color: ${(props) => props.theme.colors[props.variant][props.theme.mode]};
  color: ${(props) =>
    props.theme.colors.text[props.theme.mode]};
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${props => props.theme.colors[props.variant]};
    cursor: not-allowed;
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
