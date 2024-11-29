import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

function Contact() {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Contact Me</Title>
        <Subtitle>
          <a href="mailto:paswanthvtk@gmail.com">paswanthvtk@gmail.com</a>
          <br />
          <a href="tel:+917902847782">7902847782</a>
          <br />
          Kerala, India
        </Subtitle>
      </Wrapper>
    </Container>
  );
}

export default Contact;
