import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import imgLogonBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromRight} 0.5s;
  form {
    margin: 80px auto;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        color: ${shade(0.3, '#f4ede8')};
        transform: scale(1.1);
      }
    }
  }

  > a {
    color: #f4ede8;
    margin-top: 24px;
    text-decoration: none;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.4, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imgLogonBackground}) no-repeat center;
  background-size: cover;
`;
