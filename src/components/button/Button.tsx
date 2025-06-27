import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'themes';
type ButtonVariants = 'primary' | 'secondary' | 'default'| 'success' | 'danger' | 'warning';

type ButtonProps = {
  label?: string;
  onClick: () => void;
  variant?: ButtonVariants;
  disabled?: boolean;
  children: React.ReactNode;
};

const StyledButton = styled.button<{ variant: ButtonVariants }>`
  display: flex;
  align-items: center;
  justify-content: center;
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
StyledButton.defaultProps = {
  theme: DefaultTheme
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'default',
  disabled = false,
  children,
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {label && <div>{label}</div>}
      {children}
    </StyledButton>
  );
};

export default Button;
