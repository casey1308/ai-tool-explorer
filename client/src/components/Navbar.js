import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';


const Nav = styled.nav`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.cardText};
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  a {
    color: ${({ theme }) => theme.cardText};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.cardText};
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <Nav>
      <Logo>🧠 AI Tool Explorer</Logo>
      <NavLinks>
        <Link to="/">All Tools</Link>
        <Link to="/favorites">Favorites</Link>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </ThemeToggle>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
