import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;

    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    opacity: 0;
    transition: opacity 0.4s;
    bottom: calc(100% + 8px);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;
    visibility: hidden;

    &::before {
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      content: '';
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
