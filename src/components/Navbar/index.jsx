import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-end:10px;
  height: 70%;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;
const LinkedInButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  padding: 12px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? '1' : '0')};
  z-index: ${({ open }) => (open ? '1' : '-1')};
`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            <DiCssdeck size="3rem" />
            <span>Profileo</span>
          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        <ButtonContainer>
          <GithubButton
            href="https://github.com/aswanthpvtk"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </GithubButton>
          <LinkedInButton
            href="https://www.linkedin.com/in/aswanth-p-3b67b6249/"
            target="_blank"
            rel="noopener noreferrer"

            style={{
                marginLeft:"10px"
              }}
          >
            LinkedIn
            </LinkedInButton>
        </ButtonContainer>
      </NavContainer>

      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks to="#about" onClick={() => setOpen(!open)}>
            About
          </MobileMenuLinks>
          <MobileMenuLinks to="#skills" onClick={() => setOpen(!open)}>
            Skills
          </MobileMenuLinks>
          <MobileMenuLinks to="#experience" onClick={() => setOpen(!open)}>
            Experience
          </MobileMenuLinks>
          <MobileMenuLinks to="#projects" onClick={() => setOpen(!open)}>
            Projects
          </MobileMenuLinks>
          <MobileMenuLinks to="#education" onClick={() => setOpen(!open)}>
            Education
          </MobileMenuLinks>

          <GithubButton
            href="https://github.com/aswanthpvtk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 16px',
              width: 'max-content',
            }}
          >
            GitHub Profile
          </GithubButton>
          <LinkedInButton
            href="https://www.linkedin.com/in/aswanth-p-3b67b6249/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 16px',
              width: 'max-content',
            }}
          >
            LinkedIn
          </LinkedInButton>
        </MobileMenu>
      )}
    </Nav>
  );
}

export default Navbar;
