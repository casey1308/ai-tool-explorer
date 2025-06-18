import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 5px ${({ theme }) => theme.cardShadow};
`;

const ThemeToggle = ({ toggleTheme, isDark }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDark ? '🌞 Light' : '🌙 Dark'}
    </ToggleButton>
  );
};

export default ThemeToggle;
