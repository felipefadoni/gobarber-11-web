import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0px;
  padding: 0 16px;
  width: 100%;
  color: #312e38;
  margin-top: 16px;
  font-weight: 700;
  transition: background 0.3s;

  &:hover {
    background: ${shade(0.3, '#ff9000')};
  }
`;
